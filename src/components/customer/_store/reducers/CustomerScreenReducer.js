import {CUSTOMER_ADDING, CUSTOMER_EDITING, CUSTOMER_LISTING} from "../actions/CustomerScreenAction.types";

const initialState = {
    listing:true,
    adding:false,
    editing:false,
    editElem:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CUSTOMER_ADDING:
            state = {
                ...state,
                editing:true,
                adding:false,
                listing:false,
                editElem:action.payload
            };
            break;
        case CUSTOMER_EDITING:
            state = {
                ...state,
                editing:false,
                adding:true,
                listing:false,
                editElem:{}
            };
            break;
        case CUSTOMER_LISTING:
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
