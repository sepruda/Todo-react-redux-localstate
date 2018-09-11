import React from "react";
import Todo from "./Todo";
import Header from "./Header";
import { addTodo, removeTodo, doneTodo, sortTodo, getTodos } from "../actions/action_creators";
import { connect } from "react-redux";

class App extends React.Component {

    componentDidMount() {
        if (localStorage.hasOwnProperty("todo")) {
            let gemt_todo = localStorage.getItem("todo");
            try {
                gemt_todo = JSON.parse(gemt_todo);
                this.props.hentTodos(gemt_todo);
            } catch (event) {
                this.props.hentTodos([]);
            }
        }
    }

    componentDidUpdate() {
        localStorage.setItem("todo", JSON.stringify(this.props.todo))
    }


    render() {
        return (
            <div className="container mt-3 border rounded bg-white p-3">
                <Header antal={this.props.todo.length} />
                <Todo
                    todo={this.props.todo}
                    tilføjNyOpgave={this.props.tilføjNyOpgave}
                    fjernOpgave={this.props.fjernOpgave}
                    nySortering={this.props.nySortering}
                    faerdigOpgave={this.props.faerdigOpgave}
                />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { 
        todo: state.todo 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        tilføjNyOpgave: event => dispatch(addTodo(event)),
        fjernOpgave: id => dispatch(removeTodo(id)),
        faerdigOpgave: id => dispatch(doneTodo(id)),
        nySortering: ({oldIndex, newIndex}) => dispatch(sortTodo(oldIndex, newIndex)),
        hentTodos: todos => dispatch(getTodos(todos))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
