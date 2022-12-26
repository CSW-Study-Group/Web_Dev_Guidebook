import rootReducer from './rootReducer';

export type rootReducerType = ReturnType<typeof rootReducer>;

export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
    access_token: string;
    refresh_token: string;
}

export type boardList = {
    tip: [
        {
            id: Number;
            title: String;
            content: String;
            tag: String;
            stack: String;
            hit: Number;
            view: Number;
            createdAt: String;
            updatedAt: String;
            deletedAt: String;
            userkey: Number;
        }
    ]
    question: [
        {
            id: Number;
            title: String;
            content: String;
            tag: String;
            stack: String;
            hit: Number;
            view: Number;
            createdAt: String;
            updatedAt: String;
            deletedAt: String;
            userkey: Number;
        }
    ]
    share: [
        {
            id: Number;
            title: String;
            content: String;
            tag: String;
            stack: String;
            hit: Number;
            view: Number;
            createdAt: String;
            updatedAt: String;
            deletedAt: String;
            userkey: Number;
        }
    ]
}

export type Post = {
    data: {
        id: Number;
        username: String;
        title: String;
        content: String;
        tag: String;
        stack: String
        hit: Number;
        view: Number;
        createdAt: String;
        updatedAt: String;
        deletedAt: String;
        userKey: Number;
        Comments: any;
    }
}
