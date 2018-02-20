import {TO_HOME, MINIMIZE_CONTENT, MAXIMIZE_CONTENT, NORMALIZE_CONTENT} from '../actions/contentAction.types'

const initialState = {
    maximized:false,
    toHome:false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TO_HOME:
            state = { ...state, toHome:true };
            break;
        case MINIMIZE_CONTENT:
            state = {...state, maximized:false};
            break;
        case MAXIMIZE_CONTENT:
            state = {...state, maximized:true};
            break;
        case NORMALIZE_CONTENT:
            state = {...initialState};
            break;
        default:break
    }
    return state
}
