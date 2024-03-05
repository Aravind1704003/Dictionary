import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="dictionary">
        <div className="dict-left">
          <Link to={"/"} className="title">Dictionary</Link>
          <span className="sub">Know Your WORD</span>
        </div>
        <div className="dict-right">
          <Link className="nav" to="/aboutme">
            About Me
          </Link>
        </div>
      </div>
      {/* <div className="content">
        <Content />
      </div> */}
    </>
  );
};

export default Header;
