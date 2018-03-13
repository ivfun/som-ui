import {
    FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,
    SAVE_DATA_REQUEST, SAVE_DATA_SUCCESS, SAVE_DATA_FAILURE,
    REMOVE_DATA_FAILURE, REMOVE_DATA_REQUEST, REMOVE_DATA_SUCCESS
} from './ProblemCrudAction.types'

import ProblemServiceCrud from '../../services/Problem.service.crud';
import {problemListing} from "./ProblemScreenAction";
import {firstPage} from "../../../pagination/_store/actions/PaginationAction";

const fetchData = ()=>( ProblemServiceCrud.findAll());
const fetchDataRequest = ()=>({type: FETCH_DATA_REQUEST,});
const fetchDataFailure = (err)=>({
    type: FETCH_DATA_FAILURE,
    payload:err.message
});
const fetchDataSuccess = (data)=>({
    type: FETCH_DATA_SUCCESS,
    payload:data
});

const removeData = (id)=>( ProblemServiceCrud.remove(id));
const removeDataRequest = ()=>({type: REMOVE_DATA_REQUEST});
const removeDataFailure = (err)=>({
    type: REMOVE_DATA_FAILURE,
    payload:err.message
});
const removeDataSuccess = (data)=>({
    type: REMOVE_DATA_SUCCESS,
    payload:data
});

const saveData = (data)=>(data && data.id && data.id !== '' ? ProblemServiceCrud.update(data):ProblemServiceCrud.create(data));
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
                dispatch(problemListing());
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
                dispatch(fetchDataSuccess(data.problems ?data.problems:[]));
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
                dispatch(problemListing());
                dispatch(fetchDataAsync());
            },
            error => dispatch(removeDataFailure(error))
        )
    }
}