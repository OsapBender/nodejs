import { combineReducers } from 'redux';
import auth from "./auth";
import activeDialog from "./activeDialog";

const reducers = {
    auth,
    activeDialog
};

export default combineReducers(reducers);
