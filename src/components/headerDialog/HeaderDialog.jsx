import React from 'react';
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import {useSelector} from "react-redux";

const Header = styled(Container)({
    background: 'linear-gradient(to right, #8E54E9, #4776E6);',
    height: '50px;',
    borderRadius:'5px;'
});

const WrapperUsername = styled.div`
  display:inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 6px;
  border-radius: 5px;
  background: #614385;  
  background: -webkit-linear-gradient(to right, #516395, #614385); 
  background: linear-gradient(to right, #516395, #614385); 

`;

const Username = styled.span`
  font-size: 16px;
  background: linear-gradient(to right, hsl(98 100% 62%), hsl(204, 100%, 59%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export default () => {
    const username = useSelector(state => state.activeDialog.userId);
    if (username) {
        return (
            <Header>
                <WrapperUsername>
                    <Username>{username[0].toUpperCase() + username.slice(1)}</Username>
                </WrapperUsername>
            </Header>
        )
    }
    return null
}