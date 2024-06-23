import {configureStore} from '@reduxjs/toolkit' ;
import counterReducer from '../slices/counterSlice' ; // importing the slice
import postReducer from '../posts/postSlice'
import asyncThunkSlice from '../slices/asyncThunkSlice';
import entitySlice from '../slices/entityAdapterSlice';

export const store = configureStore({
    reducer:{
       counter : counterReducer , // using the slice in reducer
       posts   : postReducer,
       asyncThunk : asyncThunkSlice,
       entityAdater : entitySlice
    }
})