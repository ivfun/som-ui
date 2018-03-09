
import store from '../../_store/store';
import {
    fetchDataAsync, saveDataAsync
} from "../_store/actions/ComponentCrudAction";

class ComponentService{
    constructor(store){
        this._store = store;
    }
    findAll() {
        this._store.dispatch(fetchDataAsync());
    }
    create_update(objectToSave={}){
        this._store.dispatch(saveDataAsync(objectToSave));
    }


}

export default new ComponentService(store);