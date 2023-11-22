import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// creating store using configure stroe
export const store = configureStore({
    reducer : todoReducer // passing reducer to the store
})