
import store from '../../../_store/store';
import {fetchDataAsync} from "../../component/_store/actions/ComponentCrudAction";

class ServiceOrderService{
    constructor(store){
        this._store = store;
    }
    findAll(){
        this._store.dispatch(fetchDataAsync());
    }

}

export default new ServiceOrderService(store);