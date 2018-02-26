
import store from '../../_store/store';
import {fetchDataFailure, fetchDataRequest, fetchDataSuccess} from "../_store/actions/ComponentCrudAction";
import ComponentServiceCrud from './Component.service.crud';

class ComponentService{
    constructor(store){
        this._store = store;
    }
    findAll(){
        this._store.dispatch((dispatch)=>{
            dispatch(fetchDataRequest());
            ComponentServiceCrud.findAll()
                .then(
                    data=>dispatch(fetchDataSuccess(data.components?data.components:[]))
                )
                .catch(
                    error=>dispatch(fetchDataFailure(error))
                )
        })
    }

}

export default new ComponentService(store);