import React from 'react';
import Container from '@material-ui/core/Container';
import styled from "styled-components";
import Dialogs from "../../components/dialogs/Dialogs";
import Search from "../../components/search/Search";
import Messages from "../../components/messages/Messages";
import HeaderDialog from "../../components/headerDialog/HeaderDialog";

const Fact = styled.div`
  display: flex;
  height: 100%;
`;

const SectionLeft = styled.div`
 display: flex;
 flex-direction: column;
 width: 30%;
 height: 100%;
 border-right: 1px solid #000;  
`;

const SectionRight = styled.div`
  box-sizing: border-box;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  background:#fff;
  width: 70%;
  padding: 20px;
  margin-left: 20px;
`;



export default () => (
    <Container maxWidth='lg' style={ {backgroundColor: '#cfe8fc', height: '100vh'} }>
        <Fact>
            <SectionLeft>
                <Search />
                <Dialogs />
            </SectionLeft>
            <SectionRight>
                <HeaderDialog />
                <Messages />
            </SectionRight>
        </Fact>
    </Container>
)
