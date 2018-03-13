import {combineReducers} from 'redux';
import solutionModelReducer from './reducers/SolutionModelReducer';
import solutionReducer from './reducers/SolutionCrudReducer';
import solutionScreenReducer from './reducers/SolutionScreenReducer';


export default combineReducers({
    solutionModel: solutionModelReducer,
    solution:solutionReducer,
    solutionScreen: solutionScreenReducer

});