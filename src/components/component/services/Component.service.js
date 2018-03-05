
import store from '../../_store/store';
import {
    fetchDataFailure, fetchDataRequest, fetchDataSuccess, saveDataFailure,
    saveDataRequest, saveDataSuccess
} from "../_store/actions/ComponentCrudAction";
import ComponentServiceCrud from './Component.service.crud';
import {componentListing} from "../_store/actions/ComponentScreenAction";

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
    create_update(objectToSave={}){
        this._store.dispatch((dispatch)=>{
            dispatch(saveDataRequest(objectToSave));

            const {id} = objectToSave;
            let promise = id && id !== '' ? ComponentServiceCrud.update(objectToSave):ComponentServiceCrud.create(objectToSave);
            promise
                .then(
                    data=>{
                        dispatch(saveDataSuccess(data));
                        dispatch(componentListing());
                        this.findAll();
                    }
                )
                .catch(
                    error=>dispatch(saveDataFailure(error))
                )
        })
    }


}

export default new ComponentService(store);