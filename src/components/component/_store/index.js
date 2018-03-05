import {combineReducers} from 'redux';
import componentModelReducer from './reducers/ComponentModelReducer';
import componentReducer from './reducers/ComponentCrudReducer';
import componentScreenReducer from './reducers/ComponentScreenReducer';


export default combineReducers({
    componentModel: componentModelReducer,
    component:componentReducer,
    componentScreen: componentScreenReducer

});