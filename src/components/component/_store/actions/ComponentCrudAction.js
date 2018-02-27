import {
    FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    POST_DATA_REQUEST, POST_DATA_SUCCESS, POST_DATA_FAILURE
} from './ComponentCrudAction.types'


export const fetchDataRequest = ()=>({
    type: FETCH_DATA_REQUEST,
});
export const fetchDataFailure = (err)=>({
    type: FETCH_DATA_FAILURE,
    payload:err.message
});
export const fetchDataSuccess = (data)=>({
    type: FETCH_DATA_SUCCESS,
    payload:data
});
export const postDataRequest = (data)=>({
    type:POST_DATA_REQUEST,
    payload:data
});
export const postDataSuccess = (data)=>({
    type:POST_DATA_SUCCESS,
    payload:data
});
export const postDataFailure = (err)=>({
    type:POST_DATA_FAILURE,
    payload:err.message
});
