import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1,
        title : 'Sample Title 1',
        content : 'Sample content 2'
    },
    {
        id:2,
        title : 'Sample Title 2',
        content : 'Sample content 2'
    }
] ;

export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers : {
        addPost : (state , action) =>{state.push(action.payload)}
    }
});

export const {addPost} = postSlice.actions;
export const postState = (store) => store.posts;
export default postSlice.reducer;