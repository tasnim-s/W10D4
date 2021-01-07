import  {RECEIVE_TODOS} from '../actions/todos_action'

import {RECEIVE_TODO} from '../actions/todos_action'

// reducers/todos_reducer.js
const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
        default:
            return state;
    }
};

export default todosReducer;


