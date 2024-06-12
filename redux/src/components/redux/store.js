import {configureStore} from '@reduxjs/toolkit' ;
import counterReducer from '../slices/counterSlice' ; // importing the slice
import postReducer from '../posts/postSlice'

export const store = configureStore({
    reducer:{
       counter : counterReducer , // using the slice in reducer
       posts   : postReducer,
    }
})