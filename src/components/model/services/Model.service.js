
import store from '../../_store/store';
import {
    fetchDataAsync, removeDataAsync, saveDataAsync
} from "../_store/actions/ModelCrudAction";

class ModelService{
    constructor(store){
        this._store = store;
    }
    findAll() {
        this._store.dispatch(fetchDataAsync());
    }
    create_update(objectToSave={}){
        this._store.dispatch(saveDataAsync(objectToSave));
    }
    remove(id){
        this._store.dispatch(removeDataAsync(id));
    }


}

export default new ModelService(store);