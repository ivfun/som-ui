import {MODEL_ADDING, MODEL_EDITING, MODEL_LISTING} from "../actions/ModelScreenAction.types";

const initialState = {
    listing:true,
    adding:false,
    editing:false,
    editElem:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MODEL_EDITING:
            state = {
                ...state,
                editing:true,
                adding:false,
                listing:false,
                editElem:action.payload
            };
            break;
        case MODEL_ADDING:
            state = {
                ...state,
                editing:false,
                adding:true,
                listing:false,
                editElem:{}
            };
            break;
        case MODEL_LISTING:
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
