import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    posts:[],
    status : 'idle',
    err : null
};
const URL = 'http://localhost:3001/posts';


export const fetchPosts = createAsyncThunk('post/fetchPost', async()=>{
    const res = await axios.get(URL);
    return res.data;
})
// slice for Async thunk slice
const asyncThunkSlice = createSlice({
    name:'thunkSlice',
    initialState,
    reducers:{},
    // reducer midleware for the async functions
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending , (state)=>{
            state.status = 'pending';
        })
        .addCase(fetchPosts.fulfilled , (state , action) =>{
            state.status = 'fulfilled';
            state.posts = state.posts.concat(action.payload);
        })
        .addCase(fetchPosts.rejected , (state) =>{
            state.status = 'rejected'
            state.err = 'Error Fetch Posts'
        });
    }
});
export const thunkPostState = (store) => store.asyncThunk.posts;
export const getstatus = (store) => store.asyncThunk.status;
export const getError = (store) => store.asyncThunk.err;
export default asyncThunkSlice.reducer;