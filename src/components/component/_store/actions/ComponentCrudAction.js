import {
    FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    SAVE_DATA_REQUEST, SAVE_DATA_SUCCESS, SAVE_DATA_FAILURE
} from './ComponentCrudAction.types'

import ComponentServiceCrud from '../../services/Component.service.crud';
import {componentListing} from "./ComponentScreenAction";

const fetchData = ()=>( ComponentServiceCrud.findAll());
const fetchDataRequest = ()=>({type: FETCH_DATA_REQUEST,});
const fetchDataFailure = (err)=>({
    type: FETCH_DATA_FAILURE,
    payload:err.message
});
const fetchDataSuccess = (data)=>({
    type: FETCH_DATA_SUCCESS,
    payload:data
});
export function fetchDataAsync() {
    return function (dispatch) {
        dispatch(fetchDataRequest());
        return fetchData().then(
            data=>dispatch(fetchDataSuccess(data)),
            error=>dispatch(fetchDataFailure(error))
        )
    }
}

const saveData = (data)=>(data && data.id && data.id !== '' ? ComponentServiceCrud.update(data):ComponentServiceCrud.create(data));
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
                dispatch(componentListing());
                fetchDataAsync();
            },
            error=>dispatch(saveDataFailure(error))
        )
    }
}
