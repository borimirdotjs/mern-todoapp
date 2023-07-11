import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import useLogout from "../../hooks/useLogout";
import useAuthContext from "../../hooks/useAuthContext";

const Nav = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav className={styles.container}>
      <div className={styles.logo_container}>
        <Link to="/">
          <span className={styles.logo}>
            WILL<span className={styles.dot}>.</span>
          </span>
        </Link>
      </div>
      <div className={styles.links}>
        {user && (
          <>
            <span>{user?.email}</span>
            <button className={styles.logout} onClick={() => logout()}>
              logout
            </button>
          </>
        )}
        {!user && (
          <>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
