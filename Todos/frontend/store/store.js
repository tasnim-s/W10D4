import {createStore} from 'redux'
import rootReducer from '../reducers/root_reducer'
import { RECEIVE_TODO } from '../actions/todos_action'

const configureStore = () => {
    debugger;
    return createStore(rootReducer);
} 


export default configureStore;