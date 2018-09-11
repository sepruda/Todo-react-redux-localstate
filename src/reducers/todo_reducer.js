import { TODO_ADD, TODO_REMOVE, TODO_DONE, TODO_SORT, TODO_GET } from "../constants/action_types";
import { arrayMove } from "react-sortable-hoc";

const initialState = {
    todo: []
}
export const todo_reducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD:
            return {
                todo: [
                    ...state.todo,
                    {
                        opgavetekst: action.text,
                        opgaveid: action.id,
                        completed: false
                    }
                ]
            }
        case TODO_REMOVE:
            return {
                todo: [
                    ...state.todo.filter(opgave => opgave.opgaveid !== action.id)
                ]
            }
        case TODO_DONE:
            return { 
                todo: [
                    ...state.todo.map(opgave => {
                    if (opgave.opgaveid === action.id) {
                        opgave.completed = !opgave.completed
                    }
                    return opgave;
                    })
                ]
            }
        case TODO_SORT:
            const sortTodo = arrayMove([...state.todo], action.oldIndex, action.newIndex);
            return {
                todo: sortTodo
            }
        case TODO_GET:
            return {
                todo: action.todos 
            }
        default:
            return state;
    }
}