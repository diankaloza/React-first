import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../components/UI/button/myButton";
import { MyInput } from "../components/UI/input/myInput";
import { AuthContext } from "../context/context";

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    navigate("/posts");
  };
  return (
    <div>
      <h1> Сторінка для логіну</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введіть логін"></MyInput>
        <MyInput type="password" placeholder="Введіть пароль"></MyInput>
        <MyButton> Увійти</MyButton>
      </form>
    </div>
  );
};
