import React from "react";
import { useSelector } from "react-redux";
import CreateNewPost from "./CreateNewPost";
import { postState } from "./postSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const Posts = () => {
  const postData = useSelector(postState);
  const orderedData = postData.slice().sort((a,b)=> b.date.localeCompare(a));

  return (
    <>
      <CreateNewPost /> <br />
      <main>
        <h1>Posts</h1> <br />
        {orderedData.map((post) => (
          <article key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.content}</h3>
            <span>{post.author}</span>
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post}/>
            <br />
            <br />
          </article>
        ))}
      </main>
    </>
  );
};

export default Posts;
