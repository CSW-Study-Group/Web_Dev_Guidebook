import { userInfo } from './state';
import { USERLOGIN_SUCCESS, USERLOGIN_FAILURE, USERLOGIN_RESET } from './type';

const authReducer = (state = userInfo, action: any) => {
    console.log('asdfasdfas', action.payload)
    switch (action.type) {
        case USERLOGIN_SUCCESS: {
            return {
                ...state,
                message: action.payload.message,
                user: {
                    id: action.payload.user.id,
                    username: action.payload.user.username,
                    email: action.payload.user.email,
                    password: action.payload.user.password,
                    access_token: action.payload.access_token,
                    refresh_token: action.payload.refresh_token,
                },
            };
        }
        case USERLOGIN_FAILURE: {
            return {
                ...state,
                message: action.payload.message,
            };
        }
        case USERLOGIN_RESET: {
            return {
                ...state,
                message: '',
            }
        }
        default:
            return state;
    }
};

export default authReducer;