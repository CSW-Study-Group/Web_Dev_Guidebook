import { request } from './axios';

const requestLogin = (email: String, password: String) => {
    return request.post('/auth/login', {
        'email': email,
        'password': password,
})};

const requestRegister = (username: String, email: String, password: String) => {
    return request.post('/auth/register', {
        'username': username,
        'email': email,
        'password': password,
})};

const requestBoardList = (stack: String) => {
    return request.get(`/board/content/stack/${stack}`);
};

export {
    requestLogin,
    requestRegister,
    requestBoardList,
};