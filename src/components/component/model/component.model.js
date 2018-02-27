class ComponentModel{
    constructor(description){
        this._description = description;
    }
    set description(value){
        this._description = value;
    }
    get description(){
        return this._description;
    }
}
export default ComponentModel;