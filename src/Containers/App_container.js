import { addTodo, removeTodo, doneTodo, sortTodo, getTodos } from "../actions/action_creators";
import { connect } from "react-redux";
import App from '../Components/App';

const mapStateToProps = state => {
    return { 
        todo: state.todo 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        tilføjNyOpgave: text => {if (text) {dispatch(addTodo(text))}},
        fjernOpgave: id => dispatch(removeTodo(id)),
        faerdigOpgave: id => dispatch(doneTodo(id)),
        nySortering: ({oldIndex, newIndex}) => dispatch(sortTodo(oldIndex, newIndex)),
        hentTodos: todos => dispatch(getTodos(todos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
