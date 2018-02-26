
import store from '../../_store/store';
import {fetchDataFailure, fetchDataRequest, fetchDataSuccess} from "../_store/actions/ServiceOrderCrudAction";
import ServiceOrderServiceCrud from  './../services/ServiceOrder.service.crud';

class ServiceOrderService{
    constructor(store){
        this._store = store;
    }
    findAll(){
        this._store.dispatch((dispatch)=>{
            dispatch(fetchDataRequest());
            ServiceOrderServiceCrud.findAll()
                .then(
                    data=>dispatch(fetchDataSuccess(data))
                )
                .catch(
                    error=>dispatch(fetchDataFailure(error))
                )
        })
    }

}

export default new ServiceOrderService(store);