import { useState } from "react";
import styles from "./TodoForm.module.scss";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const queryClient = useQueryClient();

  const addTodo = async () => {
    return await axios.post("http://localhost:4000/api/todos", {
      title,
      todo,
    });
  };

  const { isLoading, isSuccess, isError, mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleMutate = async (e) => {
    e.preventDefault();
    await mutate({ title, todo });
    setTodo("");
    setTitle("");
  };

  return (
    <section className={styles.container}>
      <h2>New</h2>
      <form action="" onSubmit={(e) => handleMutate(e)}>
        <h5>What's on your mind ?</h5>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="todo">Todo</label>
        <textarea
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></textarea>
        <button disabled={isLoading} type="submit">
          Add
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
