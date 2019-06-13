import React, {Component} from 'react';
import styled from 'styled-components';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

const AppStyle = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const SearchPanelStyle = styled.div`
  margin: 1rem 0;
  display: flex;
`

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        1,
        [''],
        {label: "Going to learn ReactJS", important: true, id: "qwe"},
        {label: "That is so good", important: false, id: "rty"},
        {label: "I need a break...", important: false, id: "yui"}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      };
    });
  }

  addItem = (body, e) => {
    e.preventDefault();
    console.log(e);
    const newItem = {
      label: body,
      important: false,
      id: idGenerator()
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <AppStyle>
        <AppHeader/>
        <SearchPanelStyle>
          <SearchPanel/>
          <PostStatusFilter/>
        </SearchPanelStyle>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}/>
        <PostAddForm onAdd={this.addItem}/>
      </AppStyle>
    );
  }
}