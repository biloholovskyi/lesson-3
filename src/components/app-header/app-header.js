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
  let text;
  if (allPost > 10 && allPost < 21) {
    text = "записей";
  } else if(+allPost.toString().slice(-1) === 1) {
    text = "запись";
  } else if(+allPost.toString().slice(-1) > 1 && +allPost.toString().slice(-1) < 5) {
    text = "записи";
  } else if(+allPost.toString().slice(-1) > 4 || +allPost.toString().slice(-1) === 0) {
    text = "записей";
  }
  return (
    <Header>
      <h1>Danil Biloholovskyi</h1>
      <h2>{allPost} {text}, из них понравилось {like}</h2>
    </Header>
  )
}

export default AppHeader;