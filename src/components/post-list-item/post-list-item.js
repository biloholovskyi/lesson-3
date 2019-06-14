import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      edited: false,
      label: props.label,
      input: ''
    }
  }

  edit = () => {
    this.setState(({edited}) => ({
      edited: !edited
    }))
  }

  onValueChange = (e) => {
    this.setState({input: e.target.value});
  }

  onSubmit = (e) => {
    this.props.onNewValue(this.state.input, e, this.props.id);
    this.setState({input: ''});
  }

  render() {
    const time = new Date();
    let classNames = "app-list-item d-flex justify-content-between";
    let classNamesEdit = "edit-post-form";
    const {onDelete, onToggleSocial, important, like, id} = this.props;
    const {edited, label} = this.state;
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
          onClick={() => onToggleSocial(id, 'like')}>{label}</span>
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
              onClick={() => onToggleSocial(id, 'important')}>
              <i className="fa fa-star"></i>
            </button>
            <button
              type="button"
              className="btn-trash btn-sm"
              onClick={onDelete}>
              <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
        <form
          className={classNamesEdit}
          onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Новое значение"
            className="form-control new-post-label"
            onChange={this.onValueChange}
            value={this.state.input}/>
            <button type="submit" className="btn btn-outline-secondary" >Изменить</button>
        </form>
      </>
    )
  }
}