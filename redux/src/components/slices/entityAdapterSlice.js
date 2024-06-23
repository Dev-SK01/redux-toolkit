import { createEntityAdapter, createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const adapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
}); // adapter for the normalized data

export const fetchData = createAsyncThunk('posts/fetch' , async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
});
const initialState = adapter.getInitialState(); // intial state of the normalized data.

export const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {
        addEntityPost: {
            reducer(state, action) {
                adapter.addOne(state,action.payload);
            },
            // before preparations for the reducer function.
            prepare(title, content, author) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        author,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        addReactions(state ,action){
            const {postId ,reaction} = action.payload;
            // console.log(postId ,reaction);
            const foundPost = state.entities[postId];
            // console.log(foundPost)
            if(foundPost){
                foundPost.reactions[reaction]++;
            }
        }
    },
    extraReducers(builder){
        builder.addCase(fetchData.fulfilled , (state , action)=>{
            const load = action.payload.map(post =>{
                post.date = new Date().toISOString();
                return post;
            });
            adapter.upsertMany(state,load)
        });
    }
}); // creating the entity slice for that state.

export const {selectIds , selectById } = adapter.getSelectors((state) => state.entity);
export const {addEntityPost , addReactions}  = entitySlice.actions;
export default entitySlice.reducer;