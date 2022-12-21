import { post } from "./state";
import { POST_SUCCESS, POST_FAILURE, POST_RESET } from "./type";

const postReducer = (state = post, action: any) => {
    switch (action.type) {
        case POST_SUCCESS: {
            return {
                ...state,
                data: {
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content,
                    tag: action.payload.tag,
                    stack: action.payload.stack,
                    hit: action.payload.hit,
                    view: action.payload.view,
                    createdAt: action.payload.createdAt,
                    updatedAt: action.payload.updatedAt,
                    deletedAt: action.payload.deletedAt,
                    userkey: action.payload.userKey,
                    Comments: action.payload.Comments
                }
            }
        }
        case POST_FAILURE: {
            return {
                ...state,
                message: action.payload
            }
        }
        case POST_RESET: {
            return {
                ...state,
                data: {
                    id: null,
                    title: "",
                    content: "",
                    tag: "",
                    stack: "",
                    hit: null,
                    view: null,
                    createdAt: "",
                    updatedAt: "",
                    deletedAt: "",
                    userkey: null,
                    Comments: []
                }
            }
        }
        default:
            return state;
    }
}

export default postReducer;