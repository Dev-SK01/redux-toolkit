import React from 'react'
import {selectById } from './slices/entityAdapterSlice';
import { useSelector } from 'react-redux';

const Entityadapter = () => {
    const posts = useSelector((state)=> selectById(state,1));
    console.log(posts);
  return (
    <>
    <main>
        <h1>Entity Adapter Posts</h1> <br />
          <article key={posts.id}>
            <h1>{posts.title}</h1>
            <h3>{posts.body}</h3>
            <span>{posts.userId}</span>
            <br />
            <br />
          </article>
      </main>
    </>
  )
}

export default Entityadapter