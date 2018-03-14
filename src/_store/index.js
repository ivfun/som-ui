import {combineReducers} from 'redux';
import contentReducer from '../components/content/_store/index'
import serviceOrderReducer from '../components/service-order/_store/reducers/ServiceOrderCrudReducer'
import componentReducer from '../components/component/_store/index';
import solutionReducer from '../components/solution/_store/index';
import customerReducer from '../components/customer/_store/index';
import problemReducer from '../components/problem/_store/index';
import modelReducer from '../components/model/_store/index';
import paginationReducer from '../components/pagination/_store/reducers/PaginationReducer';
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