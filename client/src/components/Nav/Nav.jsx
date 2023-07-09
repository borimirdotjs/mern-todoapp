import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo_container}>
        <span className={styles.logo}>
          WILL<span className={styles.dot}>.</span>
        </span>
      </div>
      <div className={styles.links}>
        <Link>LOGIN</Link>
      </div>
    </nav>
  );
};

export default Nav;
