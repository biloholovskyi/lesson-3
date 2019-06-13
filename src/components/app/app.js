import React, {Component} from 'react';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import ModalAlert from '../modal-alert';

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
      ],
      modal: {
        status: false,
        question: "Some text",
        success: () => {console.log('success')}
      }
    }
  }

  newId = () => {
    const {data} = this.state;
    const id = Math.random().toString(36).substring(10);
    const oldId = data.filter(item => item.id === id);
    if(oldId.length === 0) {
      return id;
    } else {
      this.newId();
    }
  }

  closeModal = () => {
    this.setState(({modal: {status}}) => {
      return {
        modal: {
          status: !status
        }
      }
    })
  }

  modalQuestion = ({question = "some text", id, success = () => {console.log('success')}}) => {
    this.setState(({modal:{status}}) => {
      return {
        modal: {
          question,
          status: !status,
          success: success
        }
      }
    });
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      };
    });
    this.closeModal();
  }

  addItem = (body, e) => {
    e.preventDefault();
    const newItem = {
      label: body,
      important: false,
      id: this.newId()
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
          onDelete={this.deleteItem}
          showModal={this.modalQuestion}/>
        <PostAddForm onAdd={this.addItem}/>
        <ModalAlert
          modalData={this.state.modal}
          close={this.closeModal}
          success={this.deleteItem}/>
      </AppStyle>
    );
  }
}