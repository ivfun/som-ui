import { createStore } from 'redux'
import contentReducer from './content/_store'

/**This function is just for creating the store. It is good to be a function cos can be used for instance in tests*/

const configureStore = ()=> (createStore(contentReducer));

export default configureStore;