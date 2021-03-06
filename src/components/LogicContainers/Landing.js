import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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
    letter-spacing: 3px;
    color: ${props => props.theme.blue};
    margin-bottom: 1rem;
  }
  p {
    font-weight: 700;
    font-size: 1.5rem;
    display: ${props => (props.wrong ? 'auto' : 'none')};
    color: ${props => props.theme.white};
    margin-top: 0;
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
    <Container theme={props.theme} bg={props.bg} wrong={props.wrong}>
      <h1>between the bookends</h1>
      <p>{props.wrong}</p>
      <form onSubmit={props.handleSubmit}>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Secret"
          onChange={props.handleChange}
          value={props.password || ''}
        />
        <input type="submit" value="Enter" />
      </form>
    </Container>
  );
};

export default Landing;
