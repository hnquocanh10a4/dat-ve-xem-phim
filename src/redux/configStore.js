import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { caroselReducer } from './reducers/caroselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer';
import { LoadingReducer } from './reducers/LoadingReducer';

const rootReducer = combineReducers({
    caroselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
