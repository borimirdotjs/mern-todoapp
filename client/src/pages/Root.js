import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import styles from "./Root.module.scss";

const Root = () => {
  return (
    <div className={styles.root}>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
