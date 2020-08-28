import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';

const Form = styled.form`
  display:flex;
  align-items:center;
      div {
        width: 98%;
      }
      
      button {
        height: 40px;
      }
`;

export default () => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Form action='#' method='post'>
            <TextField
                id='outlined-multiline-flexible'
                multiline={ true }
                rowsMax={ 4 }
                value={ value }
                onChange={ handleChange }
                variant='outlined'
                placeholder='Введите сообщение...'
            />
            <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={ !value }
                endIcon={ <SendIcon /> }
            >
                Send
            </Button>
        </Form>
    )
}