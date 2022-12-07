import { boardList } from "./state";
import { BOARDLIST_FAILURE, BOARDLIST_RESET, BOARDLIST_SUCCESS } from "./type";

const boardReducer = (state = boardList, action: any) => {
    switch (action.type) {
        case BOARDLIST_SUCCESS: {
            return {
                ...state,
                boardList: {
                    tip: action.payload.tip,
                    question: action.payload.question,
                    share: action.payload.share,
                }
            }
        }
        case BOARDLIST_FAILURE: {
            return {
                ...state,
                message: action.payload
            }
        }
        case BOARDLIST_RESET: {
            return {
                ...state,
                boardList: {
                    tip: [
                        {
                            "id": null,
                            "title": "",
                            "content": "",
                            "tag": "",
                            "stack": "",
                            "hit": null,
                            "view": null,
                            "createdAt": "",
                            "updatedAt": "",
                            "deletedAt": null,
                            "userkey": null
                        },
                    ],
                    question: [
                        {
                            "id": null,
                            "title": "",
                            "content": "",
                            "tag": "",
                            "stack": "",
                            "hit": null,
                            "view": null,
                            "createdAt": "",
                            "updatedAt": "",
                            "deletedAt": null,
                            "userkey": null
                        },
                    ],
                    share: [
                        {
                            "id": null,
                            "title": "",
                            "content": "",
                            "tag": "",
                            "stack": "",
                            "hit": null,
                            "view": null,
                            "createdAt": "",
                            "updatedAt": "",
                            "deletedAt": null,
                            "userkey": null
                        },
                    ],
                },
            }
        }
        default:
            return state;
    }
}

export default boardReducer;