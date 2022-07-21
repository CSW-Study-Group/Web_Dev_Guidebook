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