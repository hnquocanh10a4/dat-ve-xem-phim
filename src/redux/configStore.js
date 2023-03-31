import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { caroselReducer } from "./reducers/caroselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";


const rootReducer = combineReducers({
    caroselReducer,
    QuanLyPhimReducer
})

export const store  = createStore(rootReducer, applyMiddleware(thunk))