import React from "react";
import { ReactComponent as Logo } from "../assets/svg/logo.svg";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <a className="logo" href="/">
          <Logo />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
