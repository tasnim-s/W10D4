import  {RECEIVE_TODOS, RECEIVE_TODO, receiveTodo, receiveTodos} from '../actions/todos_action'

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
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
              return Object.assign({}, todo);
            });
        case RECEIVE_TODO:
          debugger;
          return Object.assign({},state, {[action.todo.id]: action.todo});
        default:
            return state;
    }
};

export default todosReducer;

