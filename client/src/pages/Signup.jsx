import { useState } from "react";
import styles from "./Signup.module.scss";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, isError, error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ email, password });
  };

  return (
    <section className={styles.container}>
      <div className={styles.form_container}>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Choose a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isError ? (
            <span className={styles.error}>{error.response.data.error}</span>
          ) : null}
          <button disabled={isLoading} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
