import React from 'react';

import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = () => {
  return (
    <div className="app-list list-group">
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </div>
  )
}

export default PostList;