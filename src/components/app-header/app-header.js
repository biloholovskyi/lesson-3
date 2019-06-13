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

const AppHeader = () => {
  return (
    <Header>
      <h1>Danil Biloholovskyi</h1>
      <h2>5 записей, из них понравилось 0</h2>
    </Header>
  )
}

export default AppHeader;