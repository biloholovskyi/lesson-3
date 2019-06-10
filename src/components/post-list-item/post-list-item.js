import React from 'react';

import './post-list-item.css';

const PostListItem = () => {
  const time = new Date();
  return (
    <li className="app-list-item d-flex justify-content-between">
      <span className="app-list-item-label">
        Hello World!
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <span className="list-item-time">{time.toLocaleString([], {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</span>
        <button type="button" className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </li>
  )
}

export default PostListItem;