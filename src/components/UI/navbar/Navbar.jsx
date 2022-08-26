import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="links" to="/about">
          Про сайт
        </Link>
        <Link className="links" to="/posts">
          {" "}
          Пости{" "}
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
