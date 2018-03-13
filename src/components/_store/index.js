import {combineReducers} from 'redux';
import contentReducer from '../content/_store/reducers/contentReducer'
import serviceOrderReducer from '../service-order/_store/reducers/ServiceOrderCrudReducer'
import componentReducer from '../component/_store';
import solutionReducer from '../solution/_store';
import customerReducer from '../customer/_store';
import problemReducer from '../problem/_store';
import modelReducer from '../model/_store';
import paginationReducer from '../pagination/_store/reducers/PaginationReducer';
export default combineReducers({
    content: contentReducer,
    serviceOrder: serviceOrderReducer,
    component:componentReducer,
    solution:solutionReducer,
    customer:customerReducer,
    model:modelReducer,
    problem:problemReducer,
    pagination:paginationReducer
});