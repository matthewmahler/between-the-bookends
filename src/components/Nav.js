import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from './theme';

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin-top: 1rem;
  box-sizing: border-box;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.black}dd;
    text-decoration: none;
    padding: 1em;
    margin: 1rem;
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 10px;
    box-shadow: 0 6px ${(props) => props.theme.white};
    min-width: 100px;
    :hover {
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme.white};

      transition: 0.1s;
      box-shadow: 0 4px ${(props) => props.theme.white};
      top: 2px;
    }

    :active {
      color: ${(props) => props.theme.blue};
      border: 1px solid ${(props) => props.theme.blue};
      transition: 0.1s;
      box-shadow: 0 0 ${(props) => props.theme.blue};
      top: 6px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(
      ${(props) => (props.length > 3 ? 2 : 3)},
      1fr
    );
    justify-content: center;
    align-items: center;
    max-width: 350px;
    a {
      font-size: 0.7rem;
      padding: 0.5em;
      margin: 0;
    }
  }
`;

const Nav = ({ links }) => {
  return (
    <Container theme={theme} length={links.length}>
      {links.map((link, i) => (
        <Link key={i} to={link.path}>
          {link.text}
        </Link>
      ))}
    </Container>
  );
};

export default Nav;
