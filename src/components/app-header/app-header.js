import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #fff;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
  }
`

const AppHeader = ({like, allPost}) => {
  return (
    <Header>
      <h1>Danil Biloholovskyi</h1>
      <h2>{allPost} записей, из них понравилось {like}</h2>
    </Header>
  )
}

export default AppHeader;