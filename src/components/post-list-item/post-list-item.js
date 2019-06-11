import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      important: false,
      like: false
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

  render() {
    const time = new Date();
    let classNames = "app-list-item d-flex justify-content-between";
    const {label} = this.props;
    const {important, like} = this.state;
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }

    return (
      <div className={classNames}>
        <span
          className="app-list-item-label"
          onClick={this.onLike}>{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <span className="list-item-time">{time.toLocaleString([], {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'})}</span>
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
    )
  }
}