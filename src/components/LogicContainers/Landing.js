import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${props => props.bg}) top left;
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
    max-width: 450px;
    width: 80%;
    input[type='password'] {
      width: 100%;
      padding: 1em;
      display: inline-block;
      border: 3px solid ${props => props.theme.lightBlue};
      border-radius: 5px;
      box-sizing: border-box;
      background-color: ${props => props.theme.darkBlue};
      color: ${props => props.theme.lightBlue};
      font-family: 'miller';
      font-style: italic;
    }

    input[type='submit'] {
      width: 100%;
      background-color: ${props => props.theme.darkBlue};
      color: ${props => props.theme.white};
      padding: 1em;
      margin: 1em 0;
      border: 3px solid ${props => props.theme.lightBlue};
      border-radius: 5px;
      cursor: pointer;
      font-family: 'miller';
      font-style: italic;
    }

    input[type='password']:focus {
      border: 3px solid ${props => props.theme.blue};
      background-color: ${props => props.theme.white};
      color: ${props => props.theme.black};
    }
    input[type='submit']:hover {
      background-color: ${props => props.theme.blue};
      border: 3px solid ${props => props.theme.darkBlue};
      color: ${props => props.theme.black};
    }
  }
  h1 {
    font-style: italic;
    font-size: 3em;
    color: ${props => props.theme.blue};
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 1.9em;
    }
    form {
      input[type='password'],
      input[type='submit'] {
        width: 80%;
        padding: 0.5em;
      }
    }
  }
`;

const Landing = props => {
  return (
    <Container theme={props.theme} bg={props.bg}>
      <h1>between the bookends</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Secret Code"
          onChange={props.handleChange}
          value={props.password}
        />
        <input type="submit" value="Enter" />
      </form>
    </Container>
  );
};

export default Landing;
