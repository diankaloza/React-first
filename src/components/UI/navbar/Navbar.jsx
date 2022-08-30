import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { MyButton } from "../button/myButton";

const Navbar = (navigate) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    navigate("/login");
  };
  return (
    <div className="navbar">
      {isAuth && <MyButton onClick={logout}> Вийти</MyButton>}
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
