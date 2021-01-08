const allTodos = state => {
    const keys = Object.keys(state.todos)
     const array = keys.map(todo => {
        return state.todos[todo]
     }) 
     return array
}


export default allTodos
window.allTodos = allTodos;