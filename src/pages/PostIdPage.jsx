import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/loader";
import { useFetching } from "../hooks/useFetching";

export const PostIdPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(postId);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, ComError] = useFetching(async () => {
    const response = await PostService.getCommentsById(postId);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1> Ви відкрили сторінку поста з ІД = {postId} </h1>
      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id} {post.title}{" "}
        </div>
      )}
      <h1> Comments </h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((com) => (
            <div style={{ marginTop: 20 }}>
              <h5>{com.email} </h5>
              <div> {com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
