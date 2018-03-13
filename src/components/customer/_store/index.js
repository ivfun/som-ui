import {combineReducers} from 'redux';
import customerModelReducer from './reducers/CustomerModelReducer';
import customerReducer from './reducers/CustomerCrudReducer';
import customerScreenReducer from './reducers/CustomerScreenReducer';


export default combineReducers({
    customerModel: customerModelReducer,
    customer:customerReducer,
    customerScreen: customerScreenReducer

});