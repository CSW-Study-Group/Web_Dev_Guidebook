import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import boardReducer from './board/reducer';

const rootReducer = combineReducers({
    authReducer,
    boardReducer,
});

export default rootReducer;