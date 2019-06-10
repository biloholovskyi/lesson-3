import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Поиск по записям"/>
  )
}

export default SearchPanel;