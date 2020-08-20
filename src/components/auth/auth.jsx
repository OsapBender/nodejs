import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.3);
`;


export default () => (
    <Form>
        
        <TextField id='outlined-basic' label='Username' variant='outlined' />
        <TextField id='outlined-basic' label='Password' variant='outlined' />
    </Form>
);
