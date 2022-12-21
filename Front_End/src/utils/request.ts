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

const requestPost = (contentId: String) => {
    return request.get(`/board/content/${contentId}`);
};

const requestPostComment = (contentId: String, content: String, token: any) => {
    return request.post(`/board/content/${contentId}/comment`, {
        content: content,
    }, {
        headers: {
            'AUTHORIZATION': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

const requestPostAdd = (title: String, content: String, stack: String, tag: String, userkey: Number) => {
    return request.post(`/board/content`, {
        title,
        content,
        stack,
        tag,
        userkey,
    });
}

const requestPostHit = (contentId: String, token: any) => {
    console.log(token);
    return request.post(`/board/content/hit/${contentId}`, {
        headers: {
            'AUTHORIZATION': token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

export {
    requestLogin,
    requestRegister,
    requestBoardList,
    requestPost,
    requestPostComment,
    requestPostAdd,
    requestPostHit,
};