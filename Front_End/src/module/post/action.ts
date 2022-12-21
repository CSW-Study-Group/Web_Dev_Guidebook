import { Dispatch } from 'redux';
import { requestPost } from 'utils/request';
import { PostDispatchType, POST_SUCCESS, POST_FAILURE, POST_RESET } from './type';

export const fetchPost = (contentId: String) => (dispatch: Dispatch<PostDispatchType>) => {
    return requestPost(contentId).then((response) => {
        console.log(response)
        dispatch({
            type: POST_SUCCESS,
            payload: response.data.data
        });
    }).catch((error) => {
        dispatch({
            type: POST_FAILURE,
            payload: error.response.data
        });
    });
};

export const fetchBoardListReset = () => (dispatch: Dispatch) => {
    dispatch({
        type: POST_RESET,
    })
}