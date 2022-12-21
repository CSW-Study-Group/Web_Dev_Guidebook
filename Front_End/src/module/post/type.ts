import { Post } from "module/types";

export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
export const POST_RESET = 'POST_RESET';

export interface PostSuccessDispatch {
	type: typeof POST_SUCCESS
	payload: {
		data: Post
	}
}

export interface PostFailureDispatch {
	type: typeof POST_FAILURE
	payload: {
		message: string
	}
}

export type PostDispatchType = PostSuccessDispatch | PostFailureDispatch;