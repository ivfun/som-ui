import {
    FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    SAVE_DATA_REQUEST, SAVE_DATA_SUCCESS, SAVE_DATA_FAILURE, REMOVE_DATA_REQUEST, REMOVE_DATA_SUCCESS,
    REMOVE_DATA_FAILURE
} from '../actions/ModelCrudAction.types'

const initialState = {
    loading:false,
    loaded:false,
    error:'',
    items:[],
    record:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            state = {
                ...state,
                loading:true,
                loaded:false,
                error:'',
                items:[],
                record:{}
            };
            break;
        case FETCH_DATA_FAILURE:
            state = {
                ...state,
                loading:false,
                loaded:false,
                error:action.payload,
                items:[],
                record:{}
            };
            break;
        case FETCH_DATA_SUCCESS:
            state = {
                ...state,
                loading:false,
                loaded:false,
                error:'',
                items:action.payload,
                record:{}
            };
            break;
        case SAVE_DATA_REQUEST:
            state = {
                ...state,
                loading:true,
                loaded:false,
                error:'',
                items:[],
                record:action.payload
            };
            break;
        case SAVE_DATA_SUCCESS:
            state = {
                ...state,
                loading:false,
                loaded:true,
                error:'',
                items:[],
                record:action.payload
            };
            break;
        case SAVE_DATA_FAILURE:
            state = {
                ...state,
                loading:false,
                loaded:true,
                error:action.payload,
                items:[],
                record:{}
            };
            break;
        case REMOVE_DATA_REQUEST:
            state = {
                ...state,
                loading:true,
                loaded:false,
                error:'',
                items:[],
                record:{}
            };
            break;
        case REMOVE_DATA_SUCCESS:
            state = {
                ...state,
                loading:false,
                loaded:true,
                error:'',
                items:[],
                record:action.payload
            };
            break;
        case REMOVE_DATA_FAILURE:
            state = {
                ...state,
                loading:false,
                loaded:true,
                error:action.payload,
                items:[],
                record:{}
            };
            break;

        default:
            state = {...state};
            break
    }
    return state
}
