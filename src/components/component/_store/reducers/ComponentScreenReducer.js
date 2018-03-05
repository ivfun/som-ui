import {COMPONENT_LISTING, COMPONENT_ADDING, COMPONENT_EDITING} from "../actions/ComponentScreenAction.types";

const initialState = {
    listing:true,
    adding:false,
    editing:false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPONENT_EDITING:
            state = {
                ...state,
                editing:true,
                adding:false,
                listing:false
            };
            break;
        case COMPONENT_ADDING:
            state = {
                ...state,
                editing:false,
                adding:true,
                listing:false
            };
            break;
        case COMPONENT_LISTING:
            state = {
                ...state,
                editing:false,
                adding:false,
                listing:true
            };
            break;
        default:
            state = {...state};
            break
    }
    return state
}
