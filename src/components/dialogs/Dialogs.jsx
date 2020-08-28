import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Dialog = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 5px 10px;
  height: 60px;
  width: 100%;
`;

const Avatar = styled.div`
  border-radius: 50%;
  background: #84887d;
  min-width: 50px;
  margin-right: 30px;
`;

export default () => {
    // eslint-disable-next-line no-console
    console.log('hey');
    return (
        <Container>
            <Dialog>
                <Avatar />
                <p>Вам пришло новое сообщение...</p>
            </Dialog>
        </Container>
    )
}