import {FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from './ComponentCrudAction.types'


export const fetchDataRequest = ()=>{
    return {
        type: FETCH_DATA_REQUEST,

    }
};

export const fetchDataFailure = (err)=>({
    type: FETCH_DATA_FAILURE,
    payload:err.message
});
export const fetchDataSuccess = (data)=>({
    type: FETCH_DATA_SUCCESS,
    payload:data
});
