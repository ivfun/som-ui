import {FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from './ServiceOrderCrudAction.types'
import ServiceOrderService from '../../services/ServiceOrder.service.crud';


const fetchData = ()=>( ServiceOrderService.findAll());
const fetchDataRequest = ()=>{
    return {
        type: FETCH_DATA_REQUEST,

    }
};
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