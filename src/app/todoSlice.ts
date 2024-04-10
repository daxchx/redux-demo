import { createSlice } from "@reduxjs/toolkit";

let nextId = 3

const initialState = [
    { id: 0, title: "first todo title", completed: false },
    { id: 1, title: "second todo title", completed: false },
    { id: 2, title: "third todo title", completed: false }
]

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo(state, action) {
            return [...state, {id: nextId++, title: action.payload, completed: false}]
        },
        deleteTodo: (state, action) => {
            return state.filter(s => s.id != action.payload)
        },
        updateTodo: (state, action) => {
            return state.map((t) => {
                if(t.id === action.payload.id) {
                    return action.payload
                } else return t
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer