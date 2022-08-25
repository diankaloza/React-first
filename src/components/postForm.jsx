import React, { useState } from "react";
import { MyButton } from "./UI/button/myButton";
import { MyInput } from "./UI/input/myInput";
export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: " ", body: " " });
  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: " ", body: " " });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Назва посту"
      ></MyInput>
      <MyInput
        value={post.body}
        type="text"
        placeholder="Опис посту"
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      ></MyInput>
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};
