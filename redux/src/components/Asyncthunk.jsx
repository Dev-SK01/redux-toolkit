import React from "react";
import { useSelector } from "react-redux";
import { thunkPostState, getstatus, getError } from "./slices/asyncThunkSlice";
import ReactionButtons from "./posts/ReactionButtons";
import TimeAgo from "./posts/TimeAgo";

const Asyncthunk = () => {
  let postStatus = useSelector(getstatus);
  const posts = useSelector(thunkPostState);
  const postErr = useSelector(getError);
  let content;
  if (postStatus == "pending") {
    content = <p>loading posts.....</p>;
  } else if (postStatus == "fulfilled") {
    if (posts.length) {
      content = posts.map((post) => (
        <article key={post.id}>
          <h1>{post.title}</h1>
          <h3>{post.content}</h3>
          <span>{post.author}</span>
          <TimeAgo timestamp={post.date} />
          <ReactionButtons post={post} />
          <br />
          <br />
        </article>
      ));
    } else {
      content = <p>{postErr}</p>;
    }
  }

  return (
    <>
      <h1>Async Thunk Post</h1>
      <br />
      {content}
    </>
  );
};

export default Asyncthunk;
