import {combineReducers} from 'redux';
import problemModelReducer from './reducers/ProblemModelReducer';
import problemReducer from './reducers/ProblemCrudReducer';
import problemScreenReducer from './reducers/ProblemScreenReducer';


export default combineReducers({
    problemModel: problemModelReducer,
    problem:problemReducer,
    problemScreen: problemScreenReducer

});