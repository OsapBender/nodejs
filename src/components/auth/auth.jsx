import React, {useState} from "react";
import styled from "styled-components";
import {TextField, Button} from "@material-ui/core";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
`;

const Fact = styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 50px;
  
  div {
  margin-bottom: 10px;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

// eslint-disable-next-line consistent-return
const submitForm = async (username, password, setError, props) => {
    let resp = await axios.post('http://localhost:3000/signin', {username, password});
    if (!resp.data) return setError(true);
    setError(false);
    props.history.push('/chat');
};

export default (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, serError] = useState(false);
    return (
        <Container>
            <Form>
                <Fact>
                    <TextField
                        id={ error ? 'outlined-error' : 'outlined-basic' }
                        label={ error ? 'Wrong username' : 'Username' }
                        variant='outlined'
                        error={ !!error }
                        onChange={ (e) => setUsername(e.target.value) }
                    />
                    <TextField
                        id={ error ? 'outlined-error' : 'outlined-password-input' }
                        label={ error ? 'Wrong password' : 'Password' }
                        type='password'
                        autoComplete='current-password'
                        variant='outlined'
                        error={ !!error }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </Fact>
                <WrapperButton>
                    <Button
                        variant='contained'
                        size='large'
                        color='primary'
                        onClick={ () => submitForm(username, password, serError, props) }
                    >
                        Войти
                    </Button>
                </WrapperButton>
            </Form>
        </Container>
    )
};
