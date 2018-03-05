import {COMPONENT_LISTING, COMPONENT_ADDING, COMPONENT_EDITING} from "../actions/ComponentScreenAction.types";

const initialState = {
    listing:true,
    adding:false,
    editing:false,
    editElem:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPONENT_EDITING:
            state = {
                ...state,
                editing:true,
                adding:false,
                listing:false,
                editElem:action.payload
            };
            break;
        case COMPONENT_ADDING:
            state = {
                ...state,
                editing:false,
                adding:true,
                listing:false,
                editElem:{}
            };
            break;
        case COMPONENT_LISTING:
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
