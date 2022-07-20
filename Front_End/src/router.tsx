import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "screen/main";
import Login from "screen/login";
import Register from "screen/register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;