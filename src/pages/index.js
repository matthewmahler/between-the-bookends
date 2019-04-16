import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import useForm from '../hooks/useForm';

import Layout from '../components/Layout';
import Landing from '../components/Containers/Landing';
import About from '../components/Containers/About';

import '../fonts/fonts.css';

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
`;

const HomePage = () => {
  const correctPassword = 'banana';
  const { password, handleChange, handleSubmit } = useForm(enter);
  const [isLoggedIn, toggleLogin] = useState(false);

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
            <About theme={theme} />
          )}
        </Layout>
      )}
    />
  );
};

export default HomePage;
