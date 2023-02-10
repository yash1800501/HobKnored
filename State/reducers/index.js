import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import phoneMode from './phoneMode';

const reducers = combineReducers({
    amount: amountReducer,
    mode: phoneMode
})

export default reducers