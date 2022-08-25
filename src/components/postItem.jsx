import React from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { MyButton } from "./UI/button/myButton";
import { useHistory } from "react-router-dom";

export const PostItem = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${props.post.id}`);
  };
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}{" "}
        </strong>
        <div>{props.post.body} </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={handleClick}>Відкрити</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
      </div>
    </div>
  );
};
