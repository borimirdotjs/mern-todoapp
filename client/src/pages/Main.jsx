import SideMenu from "../components/Main/SideMenu/SideMenu";
import TodoForm from "../components/Main/TodoForm/TodoForm";
import TodoList from "../components/Main/TodoList/TodoList";

const Main = () => {
  return (
    <>
      <SideMenu />
      <TodoList />
      <TodoForm />
    </>
  );
};

export default Main;
