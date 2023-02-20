import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import phoneMode from './phoneMode';
import ModalOpen from './ModalOpen';

const reducers = combineReducers({
    amount: amountReducer,
    mode: phoneMode,
    isOpen: ModalOpen
})

export default reducers