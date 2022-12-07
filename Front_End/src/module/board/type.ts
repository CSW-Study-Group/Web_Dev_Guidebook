import { boardList } from "module/types";

export const BOARDLIST_SUCCESS = 'BOARDLIST_SUCCESS';
export const BOARDLIST_FAILURE = 'BOARDLIST_FAILURE';
export const BOARDLIST_RESET = 'BOARDLIST_RESET';

export interface boardListSuccessDispatch {
	type: typeof BOARDLIST_SUCCESS
	payload: {
		boardList: [
			tip: boardList,
			question: boardList,
			share: boardList,
		]
	}
}

export interface boardListFailureDispatch {
	type: typeof BOARDLIST_FAILURE
	payload: {
		message: string
	}
}

export type boardListDispatchType = boardListSuccessDispatch | boardListFailureDispatch;