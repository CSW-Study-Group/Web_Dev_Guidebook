import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "screen/main";
import Login from "screen/login";
import Register from "screen/register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;