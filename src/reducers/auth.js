import {ACTION_AUTH} from "../constants/actions";

const initialState = {
    isAuth: false
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_AUTH:
            return {...state, isAuth: true};
        default :
            return state;
    }
}