import {
   SET_TEXT_TO_SEARCH,SET_FIELD_TO_SEARCH
} from '../actions/searchAction.types'

const initialState = {
    text:'',
    field:''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT_TO_SEARCH:
            state = { ...state, text:action.payload};
            break;
        case SET_FIELD_TO_SEARCH:
            state = {...state, field:action.payload};
            break;

        default:break
    }
    return state
}
