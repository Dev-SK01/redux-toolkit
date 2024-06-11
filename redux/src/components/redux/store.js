import {configureStore} from '@reduxjs/toolkit' ;
import counterReducer from '../slices/counterSlice' ; // importing the slice

export const store = configureStore({
    reducer:{
       counter : counterReducer , // using the slice in reducer
    }
})