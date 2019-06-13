import React from 'react';

import './search-panel.css';
import { Input } from 'reactstrap';

const SearchPanel = () => {
  return (
    <Input
      type="text"
      className="search-input"
      placeholder="Поиск по записям"/>
  )
}

export default SearchPanel;