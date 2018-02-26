import {combineReducers} from 'redux';
import contentReducer from '../content/_store/reducers/contentReducer'
import serviceOrderReducer from '../service-order/_store/reducers/ServiceOrderCrudReducer'
export default combineReducers({
    content: contentReducer,
    serviceOrder: serviceOrderReducer
});