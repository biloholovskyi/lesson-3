import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
  constructor (props) {
    super(props);
    this.postValue = React.createRef();
    this.state = {
      important: false,
      like: false,
      edited: false,
      label: props.label
    }
  }

  onImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }))
  }

  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }

  edit = () => {
    this.setState(({edited}) => ({
      edited: !edited
    }))
  }

  editPost = (e) => {
    e.preventDefault();
    this.setState({label: this.postValue.current.value});
    this.postValue.current.value = "";
    this.edit();
  }

  render() {
    const time = new Date();
    let classNames = "app-list-item d-flex justify-content-between";
    let classNamesEdit = "edit-post-form";
    const {important, like, edited, label} = this.state;
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }
    if(edited) {
      classNamesEdit += ' edit-post-form--show';
    }

    return (
      <>
        <div className={classNames}>
        <span
          className="app-list-item-label"
          onClick={this.onLike}>{label}</span>
          <div className="d-flex justify-content-center align-items-center">
            <span className="list-item-time">{time.toLocaleString([], {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</span>
            <button
              type="button"
              className="btn-edit btn-sm"
              onClick={this.edit}>
              <i className="fa fa-edit"></i>
            </button>
            <button
              type="button"
              className="btn-star btn-sm"
              onClick={this.onImportant}>
              <i className="fa fa-star"></i>
            </button>
            <button type="button" className="btn-trash btn-sm">
              <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <form
          className={classNamesEdit}
          onSubmit={this.editPost}>
          <input
            type="text"
            placeholder="Новое значение"
            className="form-control new-post-label"
            ref={this.postValue} />
            <button type="submit" className="btn btn-outline-secondary" >Изменить</button>
        </form>
      </>
    )
  }
}