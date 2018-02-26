
import store from '../../_store/store';
import {fetchDataFailure, fetchDataRequest, fetchDataSuccess} from "../_store/actions/ServiceOrderCrudAction";
import ServiceOrderCrud from  './../services/ServiceOrder.service.crud';

class ServiceOrder{
    constructor(store){
        this._store = store;
    }
    findAll(){
        this._store.dispatch((dispatch)=>{
            dispatch(fetchDataRequest());
            ServiceOrderCrud.findAll()
                .then(
                    data=>dispatch(fetchDataSuccess(data))
                )
                .catch(
                    error=>dispatch(fetchDataFailure(error))
                )
        })
    }

}

export default new ServiceOrder(store);