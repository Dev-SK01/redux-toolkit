import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
}); // adapter for the normalized data

const initialState = adapter.getInitialState({
    status: 'idle',
    err: null
}); // intial state of the normalized data.

export const entitySlice = createSlice({
    name: 'entityAdapter',
    initialState,
    reducers: {
        addPost: {
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
        reactionAdded(state ,action){
            const {postId ,reaction} = action.payload;
            // console.log(postId ,reaction);
            const foundPost = state.entities[postId];
            // console.log(foundPost)
            if(foundPost){
                foundPost.reactions[reaction]++;
            }
        }
    },
}); // creating the entity slice for that state.

export const {selectIds , selectById} = adapter.getSelectors((state) => state.posts);
export const {addPost , reactionAdded}  = entitySlice.actions;

export default entitySlice.reducer;