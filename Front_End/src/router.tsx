import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "screen/main";
import Login from "screen/login";
import Register from "screen/register";
import Home from "screen/home";
import Board from "screen/board";
import Post from "screen/post";
import PostAdd from "screen/postAdd";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/board" element={<Board />} />
                <Route path="/home/board/post" element={<Post />} />
                <Route path="/home/board/postAdd" element={<PostAdd />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;