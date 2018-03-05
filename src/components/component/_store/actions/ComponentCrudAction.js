import {
    FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    SAVE_DATA_REQUEST, SAVE_DATA_SUCCESS, SAVE_DATA_FAILURE
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
export const saveDataRequest = (data)=>({
    type:SAVE_DATA_REQUEST,
    payload:data
});
export const saveDataSuccess = (data)=>({
    type:SAVE_DATA_SUCCESS,
    payload:data
});
export const saveDataFailure = (err)=>({
    type:SAVE_DATA_FAILURE,
    payload:err.message
});
