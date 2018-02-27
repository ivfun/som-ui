import {combineReducers} from 'redux';
import componentModelReducer from './reducers/ComponentModelReducer'
import componentReducer from './reducers/ComponentCrudReducer'
export default combineReducers({
    componentModel: componentModelReducer,
    component:componentReducer
});