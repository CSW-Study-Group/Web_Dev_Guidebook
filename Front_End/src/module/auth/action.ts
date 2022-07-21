import { Dispatch } from 'redux';
import { requestLogin } from 'utils/request';
import { userLoginDispatchType, USERLOGIN_FAILURE, USERLOGIN_SUCCESS, USERLOGIN_RESET } from './type';

export const fetchUserLogin = (email: string, password: string) => (dispatch: Dispatch<userLoginDispatchType>) => {
    return requestLogin(email, password).then((response) => {
        dispatch({
            type: USERLOGIN_SUCCESS,
            payload: response.data
        });
    }).catch((error) => {
        dispatch({
            type: USERLOGIN_FAILURE,
            payload: error.response.data
        });
    });
};

export const fetchUserLoginReset = () => (dispatch: Dispatch) => {
    dispatch({
        type: USERLOGIN_RESET,
    })
}