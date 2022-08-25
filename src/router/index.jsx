import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../context/context";
import About from "../pages/About";
import { Login } from "../pages/Login";
import { PostIdPage } from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostIdPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
