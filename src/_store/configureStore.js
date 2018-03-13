import { applyMiddleware, createStore } from 'redux';
import appReducer from './index';
import thunk from 'redux-thunk';

/**This function is just for creating the store. It is good to be a function cos can be used for instance in tests*/
const middleware = applyMiddleware(thunk);
const configureStore = ()=> (createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware ));

export default configureStore;