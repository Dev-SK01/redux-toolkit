import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: 'Sample Title 1',
        content: 'Sample content 2',
        author : 'Dev SK',
        date: new Date().toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    
    },
    {
        id: 2,
        title: 'Sample Title 2',
        content: 'Sample content 2',
        author : 'Dev SK',
        date: new Date().toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action ) {
                state.push(action.payload)
            },
            // before preparations for the reducer function.
            prepare(title, content,author) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        author,
                        date : new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }}},
        reactionAdded(state ,action){
            const {postId ,reaction} = action.payload;
            // console.log(postId ,reaction);
            const foundPost = state.find((posts) => posts.id == postId);
            // console.log(foundPost)
            if(foundPost){
                foundPost.reactions[reaction]++;
            }
        }
    }
});

export const { addPost ,reactionAdded } = postSlice.actions;
export const postState = (store) => store.posts;
export default postSlice.reducer;