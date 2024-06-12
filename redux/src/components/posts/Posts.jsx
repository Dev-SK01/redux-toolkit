import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { postState , addPost} from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";

const Posts = () => {
  const postData = useSelector(postState);
  const dispatch = useDispatch();
  const [title , setTitle] =useState('');
  const [content , setContent] =useState('');
  const createPost = (newPostData) => {
    if(title && content !==""){
      dispatch(addPost(newPostData));
      setTitle('');
      setContent('');
      console.log('Posted');
    }else{
      alert('Please Enter Data');
      
    }
  };
const post =  {
      id:nanoid() , 
      title : title , 
      content : content
    }
  return (
    <>
    <section>
        <h1>Create New Posts</h1>
        <input type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value) }
        placeholder="Enter Title"
        /> <br />
        <input type="text" 
        value={content}
        onChange={(e) => setContent(e.target.value) }
        placeholder="Enter Content For Post"
        /> <br />
        <button onClick={()=> createPost(post)}
          >ADD</button>
      </section><br />
      <main>
        <h1>Posts</h1>
        {postData.map((post) => (
          <article key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.content}</h3>
          </article>
        ))}
      </main>
    </>
  );
};

export default Posts;
