import react from "react";
import Styles from "../styles/login.module.css";

function Login() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <h1>Login</h1>
          <form className={Styles.form}>
            <input
              className={Styles.input}
              placeholder="Enter Email/Username "
              name="username"
            />
            <input
              className={Styles.input}
              placeholder="Enter password"
              name="password"
            />
            <button className={Styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
