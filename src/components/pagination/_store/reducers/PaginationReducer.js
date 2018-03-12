import {
    CHANGED_PAGE, FIRST_PAGE
} from '../actions/PaginationAction.types'

const initialState = {
    activePage:1
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_PAGE:
            state = {
                ...state,
                activePage:action.payload
            };
            break;
        case FIRST_PAGE:
            state={
                ...state,
                activePage:1
            };
            break;
        default:
            state = {...state};
            break
    }
    return state
}
