import axios from 'axios';
import configService from "../../../config/configService";


class GenericHttpRequest {

    constructor(instanceOf){
        this.axios = instanceOf;
    }

    get(uri, params){
        return this.axios.get(uri, {params}).then(this.success)
    }

    post(uri, data){
        return this.axios.post(uri, data).then(this.success)
    }

    put(uri, data) {
        return this.axios.put(uri, data).then(this.success)
    }

    delete(uri, params) {
        return this.axios.delete(uri, {params}).then(this.success)
    }

    success(response){
        return response.data
    }
}
const getInstanceOf = (baseUrl)=>{
    let instanceOf =  axios.create({
        baseURL:baseUrl,
        timeout:6000,
        headers: {'X-Custom-Header': 'foobar'}
    });
    return instanceOf;
};

class HttpService extends GenericHttpRequest{
    constructor(instanceOf){
        super(instanceOf);
    }


}

export default new HttpService(getInstanceOf(configService.API_URL));