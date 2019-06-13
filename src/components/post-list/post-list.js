import React from 'react';

import './post-list.css';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts, onDelete}) => {

  const elements = posts.filter(item => toString.call(item) === "[object Object]").map((item) => {
    const {id, ...itemProps} = item;
    return (
      <ListGroupItem key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}/>
      </ListGroupItem>
    )
  });

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;