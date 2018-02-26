import {FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from '../actions/ServiceOrderCrudAction.types'

const initialState = {
    loading:false,
    loaded:false,
    error:'',
    items:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            state = {
                ...state,
                loading:true,
                loaded:false,
                error:'',
                items:[]
            };
            break;
        case FETCH_DATA_FAILURE:
            state = {
                ...state,
                loading:false,
                loaded:false,
                error:action.payload,
                items:[]
            };
            break;
        case FETCH_DATA_SUCCESS:
            state = {
                ...state,
                loading:false,
                loaded:false,
                error:'',
                items:action.payload
            };
            break;
        default:
            state = {...state};
            break
    }
    return state
}
