import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";
import React from "react";

let CreateNewPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author ,setAuthor] = useState('');
  // creating a calllback function for dispatch the payload
  const createPost = (title ,content ,author) => {
    if (title && content && author) {
      dispatch(addPost(title ,content ,author));
      setTitle("");
      setContent("");
    }
  };
  return (
    <section>
      <h1>Create New Posts</h1>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
        id="title"
      />
      <br />
      <label htmlFor="author">Author</label>
      <input type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter Author Name"
      />
      <br />
      <label htmlFor="content">Content:</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter Content For Post"
        id="content"
      />
      <br />
      <button onClick={() => createPost(title ,content ,author)}
      disabled = {!title && !author && !content ? true : false }
      >ADD POST</button>
    </section>
  );
};
CreateNewPost = React.memo(CreateNewPost);
export default CreateNewPost;
