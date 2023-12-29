import React from 'react';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <h1>My Blog</h1>
    <ul>
      {props.posts.map(post => (
        <li key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  console.log(data)

  return {
    posts: data.posts
  };
};

export default Index;