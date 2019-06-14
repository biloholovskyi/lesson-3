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
        {label: "Going to learn ReactJS", important: true, like: false, id: "qwe"},
        {label: "That is so good", important: false, like: false, id: "rty"},
        {label: "I need a break...", important: false, like: false, id: "yui"}
      ],
      modal: {
        status: false,
        question: "Some text",
        success: () => {console.log('success')}
      },
      term: '',
      filter: 'all'
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

  modalQuestion = ({question = "some text", id, success = () => {console.log('success')}} = {}) => {
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
    if(body) {
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
  }

  onToggleSocial = (id, key) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newItem = data[index];
      newItem[key] = !newItem[key];
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  searchPost = (items, term) => {
    if(term === 0) {
      return items;
    }
    return items.filter(item => item.label.toLowerCase().indexOf(term) > -1);
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  filterPost = (items, filter) => {
    if(filter === 'like') {
      return items.filter(item => item.like);
    } else {
      return items;
    }
  }

  onNewValue = (body, e, id) => {
    e.preventDefault();
    if(body) {
      this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = {...old, label: body, id: this.newId()};
        // const newItem = {...old, label: body};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        console.log(newArr);
        return {
          data: newArr
        }
      })
    }
  }

  render() {
    const {data, term, filter} = this.state;
    const like = data.filter(item => item.like).length;
    const allPost = data.length;
    const visiblePost = this.filterPost(this.searchPost(data, term), filter);
    return (
      <AppStyle>
        <AppHeader
          like={like}
          allPost={allPost}/>
        <SearchPanelStyle>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </SearchPanelStyle>
        <PostList
          posts={visiblePost}
          onDelete={this.deleteItem}
          showModal={this.modalQuestion}
          onToggleSocial={this.onToggleSocial}
          onNewValue={this.onNewValue}/>
        <PostAddForm onAdd={this.addItem}/>
        <ModalAlert
          modalData={this.state.modal}
          close={this.closeModal}/>
      </AppStyle>
    );
  }
}