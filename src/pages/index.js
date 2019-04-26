import React, { useState } from 'react';
// import { useTransition, animated } from 'react-spring';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import useForm from '../hooks/useForm';

import Layout from '../components/Layout';
import Landing from '../components/Containers/Landing';
import About from '../components/Containers/About';
import Album from '../components/Containers/Album';

import '../fonts/fonts.css';
import MakingOf from '../components/Containers/MakingOf';
import Blog from '../components/Containers/Blog';

const theme = {
  white: '#eeeeee',
  lightGray: '#bebfc1',
  gray: '#5E5F62',
  black: '#040404',
  lightBlue: '#8A9CA2',
  blue: '#427ACA',
  blueGray: '#2E4C6A',
  darkBlue: '#253053',
  red: '#CF0000',
  darkRed: '#9E090B',
  redBrown: '#633C3F',
};

const GlobalStyle = createGlobalStyle`
html{
    font-family: 'miller', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif; 
  }

  body {
    margin:0;
  }
  @media all and (max-width: 1200px) {
    width: 100%
    html{
      margin: 0;
    }
    h1{
      text-align: center;
    }
    
  }
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const HomePage = () => {
  const correctPassword = 'feeny';
  const { password, handleChange, handleSubmit } = useForm(enter);
  const [isLoggedIn, toggleLogin] = useState(false);
  const [pageIndex, setPage] = useState(0);

  function handleClick(index) {
    console.log('clicked index', index);
    setPage(index);
  }

  const pages = [
    <About theme={theme} handleClick={handleClick} />,
    <Album theme={theme} handleClick={handleClick} />,
    <MakingOf theme={theme} handleClick={handleClick} />,
    <Blog theme={theme} handleClick={handleClick} />,
  ];

  function enter() {
    if (password.password === correctPassword) {
      toggleLogin(true);
    } else {
      console.log(password);
    }
  }
  return (
    <StaticQuery
      query={graphql`
        query HomePage {
          contentfulAbout {
            name
            landingImage {
              file {
                url
              }
            }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <Layout>
          <GlobalStyle />
          {!isLoggedIn ? (
            <Landing
              theme={theme}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isLoggedIn={isLoggedIn}
              bg={contentfulAbout.landingImage.file.url}
            />
          ) : (
            pages[pageIndex]
          )}
        </Layout>
      )}
    />
  );
};

export default HomePage;
