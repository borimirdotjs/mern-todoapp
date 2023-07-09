import styles from "./Main.module.scss";
import SideMenu from "./SideMenu/SideMenu";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const Main = () => {
  return (
    <section className={styles.container}>
      <SideMenu />
      <TodoList />
      <TodoForm />
    </section>
  );
};

export default Main;
