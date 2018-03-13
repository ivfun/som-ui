import {
    FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    SAVE_DATA_REQUEST, SAVE_DATA_SUCCESS, SAVE_DATA_FAILURE,
    REMOVE_DATA_FAILURE, REMOVE_DATA_REQUEST, REMOVE_DATA_SUCCESS
} from './ModelCrudAction.types'

import ModelServiceCrud from '../../services/Model.service.crud';
import {modelListing} from "./ModelScreenAction";
import {firstPage} from "../../../pagination/_store/actions/PaginationAction";

const fetchData = ()=>( ModelServiceCrud.findAll());
const fetchDataRequest = ()=>({type: FETCH_DATA_REQUEST,});
const fetchDataFailure = (err)=>({
    type: FETCH_DATA_FAILURE,
    payload:err.message
});
const fetchDataSuccess = (data)=>({
    type: FETCH_DATA_SUCCESS,
    payload:data
});

const removeData = (id)=>( ModelServiceCrud.remove(id));
const removeDataRequest = ()=>({type: REMOVE_DATA_REQUEST});
const removeDataFailure = (err)=>({
    type: REMOVE_DATA_FAILURE,
    payload:err.message
});
const removeDataSuccess = (data)=>({
    type: REMOVE_DATA_SUCCESS,
    payload:data
});

const saveData = (data)=>(data && data.id && data.id !== '' ? ModelServiceCrud.update(data):ModelServiceCrud.create(data));
const saveDataRequest = (data)=>({
    type:SAVE_DATA_REQUEST,
    payload:data
});
const saveDataSuccess = (data)=>({
    type:SAVE_DATA_SUCCESS,
    payload:data
});
const saveDataFailure = (err)=>({
    type:SAVE_DATA_FAILURE,
    payload:err.message
});

export function saveDataAsync(data) {
    return function (dispatch) {
        dispatch(saveDataRequest(data));
        return saveData(data).then(
            data=> {
                dispatch(saveDataSuccess(data));
                dispatch(modelListing());
                dispatch(fetchDataAsync());
            },
            error=>dispatch(saveDataFailure(error))
        )
    }
}
export function fetchDataAsync() {
    return function (dispatch) {
        dispatch(fetchDataRequest());
        return fetchData().then(
            data=>{
                dispatch(fetchDataSuccess(data.models ?data.models:[]));
                dispatch(firstPage());
            },
            error=>dispatch(fetchDataFailure(error))
        )
    }
}

export function removeDataAsync(id) {
    return function (dispatch) {
        dispatch(removeDataRequest());
        return removeData(id).then(
            data=> {
                dispatch(removeDataSuccess(data));
                dispatch(modelListing());
                dispatch(fetchDataAsync());
            },
            error => dispatch(removeDataFailure(error))
        )
    }
}