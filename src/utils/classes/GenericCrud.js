import HttpService from '../services/http/http.service';

class GenericCrud{
    constructor(url){
        this._url = url;
    }
    findAll(){
        return HttpService.get(this._url);
    }
    findById(id){
        return HttpService.get(this._url+'/'+id);
    }
    create(data){
        return HttpService.post(this._url,data);
    }
    update(data){
        return HttpService.put(this._url,data);
    }
    remove(id){
        return HttpService.delete(this._url+'/'+id);
    }
}

export default GenericCrud;