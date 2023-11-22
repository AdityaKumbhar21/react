import {createSlice, nanoid} from '@reduxjs/toolkit'

// this is the initial state of the todo
const initialState = {
    todos: [{
        id: 1,
        text:"Hello World"
    }]
}

const todoSlice = createSlice({
    name: todo,
    initialState,
    reducers: {
        // state and action is what we get with every reducers,
        // state is the current state of the component and action is used to manipulate state
        addTodo: (state, action) => {
            const todo =   {
                id: nanoid(), // generating IDs
                text: action.payload // getting text from user input as the prop is text there is no need of writing action.payload.text
            }
            //adding todo 
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => (
                todo.id !== action.payload
            ))
        },

        updateTodo: (state, action) =>{
            state.todos.forEach((todo) => {
                action.payload === todo 
                todo.text = action.payload
            })
        }
    }
})


export const {addTodo, removeTodo} =  todoSlice.actions

export default todoSlice.reducer