import {PROBLEM_ADDING, PROBLEM_EDITING, PROBLEM_LISTING} from "../actions/ProblemScreenAction.types";

const initialState = {
    listing:true,
    adding:false,
    editing:false,
    editElem:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PROBLEM_EDITING:
            state = {
                ...state,
                editing:true,
                adding:false,
                listing:false,
                editElem:action.payload
            };
            break;
        case PROBLEM_ADDING:
            state = {
                ...state,
                editing:false,
                adding:true,
                listing:false,
                editElem:{}
            };
            break;
        case PROBLEM_LISTING:
            state = {
                ...state,
                editing:false,
                adding:false,
                listing:true,
                editElem:{}
            };
            break;
        default:
            state = {...state};
            break
    }
    return state
}
