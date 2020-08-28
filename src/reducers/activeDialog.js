import {ACTION_ACTIVE_DAILOG} from "../constants/actions";

const initialState = {
    userId: ''
};

export default (state = initialState , action) => {
    if (action.type === ACTION_ACTIVE_DAILOG) {
        return {...state, userId: action.id};
    } 
    return state;
}