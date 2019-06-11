import React from 'react';

import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

  const elements = posts.map((item) => {
    if(typeof item === "object") {
      const {id, ...itemProps} = item;
      return (
        <li key={id} className="list-group-item">
          <PostListItem {...itemProps}/>
        </li>
      )
    }
  });

  return (
    <div className="app-list list-group">
      {elements}
    </div>
  )
}

export default PostList;