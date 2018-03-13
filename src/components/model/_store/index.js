import {combineReducers} from 'redux';
import modelModelReducer from './reducers/ModelModelReducer';
import modelReducer from './reducers/ModelCrudReducer';
import modelScreenReducer from './reducers/ModelScreenReducer';


export default combineReducers({
    modelModel: modelModelReducer,
    model:modelReducer,
    modelScreen: modelScreenReducer

});