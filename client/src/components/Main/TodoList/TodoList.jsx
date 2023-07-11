import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import styles from "./TodoList.module.scss";
import { ImCheckmark, ImCheckmark2, ImBin2 } from "react-icons/im";
import { formatDistanceToNow } from "date-fns";
import Pagination from "../../Pagination/Pagination";

const TodoList = () => {
  const queryClient = useQueryClient();
  const [todoData, setTodoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  //Get Todos

  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/todos");
      setTodoData(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  // Update Todo
  const updateTodo = async (id, completed) => {
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/todos/${id}`,
        { completed: !completed }
      );
      setTodoData((prevData) =>
        prevData.map((todo) =>
          todo._id === response.data._id ? response.data : todo
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const { data: todos, isLoading, error } = useQuery(["todos"], getTodos);
  const mutation = useMutation(updateTodo);

  const handleCompleted = (id, completed) => {
    mutation.mutate(id, completed);
  };

  //Delete Todo

  const deleteTodo = async (id) => {
    return await axios.delete(`http://localhost:4000/api/todos/${id}`);
  };

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  //Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = todoData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.container}>
      <h2>Tasks</h2>
      <div className={styles.todos}>
        {todoData.length === 0 && <p className={styles.no_todos}>No todos</p>}
        {currentPosts?.map((todo) => (
          <div
            className={styles.todo}
            key={todo._id}
            style={{ borderLeft: todo.completed ? `20px solid green` : "" }}
            onDoubleClick={() => handleCompleted(todo._id, todo.completed)}
          >
            <div>
              <h4>{todo.title}</h4>
              <span className={styles.created_at}>
                {formatDistanceToNow(new Date(todo.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <div className={styles.icons}>
              {todo.completed ? (
                <ImCheckmark
                  onClick={() => handleCompleted(todo._id, todo.completed)}
                />
              ) : (
                <ImCheckmark2
                  onClick={() => handleCompleted(todo._id, todo.completed)}
                />
              )}
              <ImBin2 onClick={() => deleteMutation.mutate(todo._id)} />
            </div>
          </div>
        ))}
        {todoData.length > 5 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={todoData.length}
            paginate={paginate}
          />
        )}
      </div>
    </section>
  );
};

export default TodoList;
