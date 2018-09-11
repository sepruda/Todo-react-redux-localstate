import * as type from "../constants/action_types";

export const addTodo = text => {
    if (text) {
        return {
                type: type.TODO_ADD,
                text,
                id: Date.now(),
                completed: false
        }
    }
}

export const removeTodo = id => {
    return {
        type: type.TODO_REMOVE,
        id
    }
}

export const doneTodo = id => {
    return {
        type: type.TODO_DONE,
        id
    }
}

export const sortTodo = (oldIndex, newIndex) => {
    return {
        type: type.TODO_SORT,
        oldIndex,
        newIndex
    }
}

export const getTodos = (todos) => {
    return {
        type: type.TODO_GET,
        todos
    }
}
