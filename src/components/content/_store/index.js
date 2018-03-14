import {combineReducers} from 'redux';
import contentReducer from './reducers/contentReducer';
import searchReducer from './reducers/searchReducer';


export default combineReducers({
    content: contentReducer,
    search:searchReducer
});
