import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import boardReducer from './board/reducer';
import postReducer from './post/reducer';

const rootReducer = combineReducers({
    authReducer,
    boardReducer,
    postReducer,
});

export default rootReducer;