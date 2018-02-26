import {combineReducers} from 'redux';
import contentReducer from '../content/_store/reducers/contentReducer'
import serviceOrderReducer from '../service-order/_store/reducers/ServiceOrderCrudReducer'
import componentReducer from '../component/_store/reducers/ComponentCrudReducer';
export default combineReducers({
    content: contentReducer,
    serviceOrder: serviceOrderReducer,
    component:componentReducer
});