import React from "react";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftNav}>
        <div className={styles.logo}>Photo Gallery</div>
        <Link className={styles.link} to={"/"}>
          Home
        </Link>
      </div>
      <div className={styles.rightNav}>
        <Link className={styles.link} to={"/login"}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
