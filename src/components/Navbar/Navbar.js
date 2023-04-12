import React from "react";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <h2>Logo</h2>
      <ul>
        <li>home</li>
        <li>about us</li>
        <li>projects</li>
        <li>venue</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
