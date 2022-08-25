import { useEffect, useRef, useState } from "react";
import PostService from "../API/PostService";
import { PostFilter } from "../components/postFilter";
import { PostList } from "../components/postList";
import Loader from "../components/UI/loader/loader";
import MyModal from "../components/UI/mymodal/myModal";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../components/utils/pages";
import { MyButton } from "../components/UI/button/myButton";
import { PostForm } from "../components/postForm";
import Pagination from "../components/UI/pagination/pagination";
import usePosts from "../hooks/usePosts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Створити користувача
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr></hr>
      <br></br>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1> Произошла ошибка ${postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSeachedPosts}
        title="Пости про JS "
      />

      {isPostLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {" "}
          <Loader />
        </div>
      )}

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
