import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { caroselReducer } from "./reducers/caroselReducer";


const rootReducer = combineReducers({
    caroselReducer,
})

export const store  = createStore(rootReducer, applyMiddleware(thunk))