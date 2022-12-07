import { Dispatch } from 'redux';
import { requestBoardList } from 'utils/request';
import { boardListDispatchType, BOARDLIST_FAILURE, BOARDLIST_RESET, BOARDLIST_SUCCESS } from './type';

export const fetchBoardList = (stack: String) => (dispatch: Dispatch<boardListDispatchType>) => {
    return requestBoardList(stack).then((response) => {
        dispatch({
            type: BOARDLIST_SUCCESS,
            payload: response.data
        });
    }).catch((error) => {
        dispatch({
            type: BOARDLIST_FAILURE,
            payload: error.response.data
        });
    });
};

export const fetchBoardListReset = () => (dispatch: Dispatch) => {
    dispatch({
        type: BOARDLIST_RESET,
    })
}