import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const ModalWrapper = styled.div`
  display: ${props => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0,0,0,.7);
`

const ModalBody = styled.div`
  min-width: 300px;
  -webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 6px 20px rgba(255, 2555, 255, 0.4);
  h2 {
    font-size: 18px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`

const ModalAlert = ({modalData: {status, question, success}, close}) => {
  return (
    <ModalWrapper show={status}>
      <ModalBody>
        <h2>{question}</h2>
        <ButtonWrapper>
          <Button color="success" onClick={success}>Подтвердить</Button>
          <Button color="danger" onClick={close}>Отмена</Button>
        </ButtonWrapper>
      </ModalBody>
    </ModalWrapper>
  )
}

export default ModalAlert;