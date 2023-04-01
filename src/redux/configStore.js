import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { caroselReducer } from './reducers/caroselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';

const rootReducer = combineReducers({
    caroselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
