import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  thunkPostState,
  getstatus,
  getError,
  fetchPosts,
} from "./slices/asyncThunkSlice";

const Asyncthunk = () => {
  const postStatus = useSelector(getstatus);
  const posts = useSelector(thunkPostState);
  console.log(posts);
  const postErr = useSelector(getError);
  const dispatch = useDispatch();
  let content;

  if (postStatus == "pending") {
    content = <p>Loading posts.....</p>;
  } else if (postStatus == "fulfilled") {
    content = posts.map((post) => (
      <article key={post.id}>
        <h1>{post.title}</h1>
        <h3>{post.content}</h3>
        <span>{post.author}</span>
        <br />
      </article>
    ));
  } else {
    content = <p>{postErr}</p>;
  }
  useEffect(()=>{
    if(postStatus == 'idle'){
      dispatch(fetchPosts());
    }
  }, [postStatus])
  return (
    <>
      <h1>Async Thunk Post</h1>
      {content}
    </>
  );
};

export default Asyncthunk;
