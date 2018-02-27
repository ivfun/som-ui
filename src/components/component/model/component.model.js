import {setDescription} from "../_store/actions/ComponentModelAction";

class ComponentModel{
    constructor(store){
        this._description = '';
        this._store = store;
    }

    set description(value){
        this._description = value;
        this._store.dispatch(setDescription(value))
    }
    get description(){
        return this._description;
    }
}
export default ComponentModel;