import {SOLUTION_ADDING, SOLUTION_EDITING, SOLUTION_LISTING} from "../actions/SolutionScreenAction.types";

const initialState = {
    listing:true,
    adding:false,
    editing:false,
    editElem:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SOLUTION_EDITING:
            state = {
                ...state,
                editing:true,
                adding:false,
                listing:false,
                editElem:action.payload
            };
            break;
        case SOLUTION_ADDING:
            state = {
                ...state,
                editing:false,
                adding:true,
                listing:false,
                editElem:{}
            };
            break;
        case SOLUTION_LISTING:
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
