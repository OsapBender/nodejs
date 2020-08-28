import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
// import debounce from 'debounce';
import axios from "axios";
import {useDispatch} from "react-redux";
import {dispatchActiveDialog} from "../../constants/actions";

const Fact = styled.div`
  position:relative;
`;

const Container = styled.div`
 position:relative;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  background: #f1f1f1;
  padding: 5px 10px;
  outline: none;
`;

const Icon = styled.span`
  position:absolute;
  right: 25px;
  z-index: 1;
`;

const Hints = styled.ul`
  position:absolute;
  background:#fff;
  left: -25px;
  top: 45px;
  width: 107%;
  height: 100vh;
  padding-left: 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 20px;
  border-bottom: 1px solid black;
  
  &:hover {
    background: #eeeeee;
  }
`;

export default () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const getUsers = async (value) => {
        if (value.length > 0) {
            let resp = await axios.post(`http://localhost:3000/getUsers`, {value});
            await setUsers(resp.data);
        } else {
            await setUsers('');
        }
    };

    const handleChange = event => {
        getUsers(event.target.value);
    };
    return (
        <Fact>
            <Container>
                <Input
                    type='search'
                    onChange={ handleChange }
                    placeholder='Поиск...'
                />
                <Icon><SearchIcon /></Icon>
            </Container>
            {users.length > 0 ? (
                <Hints>
                    {users.map(item => (
                        <Item key={ item } onClick={ () => dispatch(dispatchActiveDialog(item)) }>{item}</Item>
                    ))}
                </Hints>
            )
                : null
            }
        </Fact>
    )
}