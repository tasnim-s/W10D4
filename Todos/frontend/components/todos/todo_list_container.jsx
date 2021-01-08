import {connect} from 'react-redux'
import allTodos from '../../reducers/selectors'
import ToDoList from './todo_list'

const mapStatetoProps = state => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchtoProps = state => {
    return {
        todos:
    }

}

connect(mapStatetoProps, mapDispatchtoProps)