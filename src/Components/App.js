import React from "react";
import Todo from "./Todo";
import Header from "./Header";
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
                <Header antal={this.props.todo.filter(t => !t.completed).length} />
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

export default App;
