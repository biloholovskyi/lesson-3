import React, {Component} from 'react';

import './search-panel.css';
import { Input } from 'reactstrap';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <Input
        type="text"
        className="search-input"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch} />
    )
  }
}