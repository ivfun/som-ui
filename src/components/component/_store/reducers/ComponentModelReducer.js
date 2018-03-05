import {SET_DESCRIPTION, SET_ID} from "../actions/ComponentModelAction.types";

const initialState = {
    description:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DESCRIPTION:
            state = {
                ...state,
                description:action.payload
            };
            break;
        case SET_ID:
            state = {
                ...state,
                id:action.payload
            };
            break;
        default:
            state = {...state};
            break
    }
    return state
}
