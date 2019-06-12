import React from 'react';

import './app.css';
import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const App = () => {

  const data = [
    1,
    [''],
    {label: "Going to learn ReactJS", important: true, id: "qwe"},
    {label: "That is so good", important: false, id: "rty"},
    {label: "I need a break...", important: false, id: "yui"}
  ];

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </div>
  );
}

export default App;