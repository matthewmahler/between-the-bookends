import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  padding: 2em;
  box-sizing: border-box;
  background: ${props => props.theme.black};
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'miller';

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dateSig {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .field {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 1em;
    }
    label {
      font-size: 2em;
      margin-bottom: 0.5em;
      color: ${props => props.theme.white};
    }

    .title,
    .postBody,
    .postDate,
    .signature {
      padding: 0.5em;
      font-size: 1.5em;
      background-color: ${props => props.theme.lightGray};
      color: ${props => props.theme.black};
    }
    .title {
      min-width: 30vw;
    }
    .postBody {
      min-width: 50vw;
      min-height: 40vh;
    }
    button {
      width: 100%;
      background-color: ${props => props.theme.darkBlue};
      color: ${props => props.theme.white};
      padding: 1em;
      margin: 1em 0;
      font-size: 2em;
      border: 3px solid ${props => props.theme.lightBlue};
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .back {
    position: absolute;
    margin: 1em;
    padding: 0.5em;
    top: 50vh;
    left: 0;
    border: 1px solid ${props => props.theme.blue};
    border-radius: 0.5em;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    cursor: pointer;
    :hover {
      background-color: ${props => props.theme.lightGray};
      color: ${props => props.theme.blue};
    }
  }
`;
const FormContainer = ({ children, theme }) => {
  return <Container theme={theme}>{children}</Container>;
};

export default FormContainer;
