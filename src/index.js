import React from "react";
import ReactDOM from "react-dom";

import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { todo_reducer } from "./reducers/todo_reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(todo_reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
