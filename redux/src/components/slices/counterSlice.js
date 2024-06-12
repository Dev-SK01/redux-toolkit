import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
} // creating the initial value

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state) => {state.count += 1} ,
        decrement : (state) => {state.count -= 1} ,
        reset : (state) => {state.count = 0},
        incrementByAmount : (state , action ) =>{
            state.count += action.payload;
        }

    }
}); // creating slice state with reducer logic's

export const { increment , decrement, reset , incrementByAmount} = counterSlice.actions ; // for app dispatcher

export default counterSlice.reducer; // for store reducer