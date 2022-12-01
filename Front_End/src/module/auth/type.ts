import { User } from "module/types";

export const USERLOGIN_SUCCESS = 'USERLOGIN_SUCCESS';
export const USERLOGIN_FAILURE = 'USERLOGIN_FAILURE';
export const USERLOGIN_RESET = 'USERLOGIN_RESET';

export type userLoginDispatchType = userLoginSuccessDispatch | userLoginFailureDispatch;

export interface userLoginSuccessDispatch {
	type: typeof USERLOGIN_SUCCESS
	payload: {
		message: string
		user: User
	}
}

export interface userLoginFailureDispatch {
	type: typeof USERLOGIN_FAILURE
	payload: {
		message: string
	}
}