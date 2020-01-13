import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import BackgroundImage from 'gatsby-background-image';
import useForm from '../hooks/useForm';
import Layout from '../components/Layout';
import Landing from '../components/LogicContainers/Landing';
import About from '../components/LogicContainers/About';
import Album from '../components/LogicContainers/Album';
import Form from '../components/LogicContainers/Form';
import '../fonts/fonts.css';
import MakingOf from '../components/LogicContainers/MakingOf';
import Blog from '../components/LogicContainers/Blog';

const theme = {
  white: '#cccccc',
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
/* html{
    font-family: 'miller', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif; 
  } */

  body {
    margin:0;
    h1,
    h2{
  font-family: 'miller';

}
}
  
  @media all and (max-width: 1200px) {
    width: 100%;
    html{
      margin: 0;
    }
    h1{
      font-family: 'miller';
      text-align: center;
    }
    
  }
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background-size: cover;
  box-shadow: 0 0 2em 2em ${props => props.theme.black} inset;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  div {
    width: 100%;
  }
`;

const HomePage = () => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const correctPassword = 'memory';
  const { values, handleChange, handleSubmit } = useForm(enter);
  const [isLoggedIn, toggleLogin] = useState(false);
  const [pageIndex, setPage] = useState(0);
  const [pageBackground, setPageBackground] = useState(
    Math.floor(Math.random() * 7)
  );
  function handleClick(index) {
    setPage(index);
  }

  const pages = [
    <About theme={theme} handleClick={handleClick} />,
    <Album theme={theme} handleClick={handleClick} />,
    <MakingOf theme={theme} handleClick={handleClick} />,
    <Blog theme={theme} handleClick={handleClick} />,
    <Form theme={theme} handleClick={handleClick} />,
  ];

  function enter() {
    if (values.password === correctPassword) {
      toggleLogin(true);
    } else {
      console.log(values.password);
    }
  }

  return (
    <animated.div style={fade}>
      <StaticQuery
        query={graphql`
          query HomePage {
            contentfulAbout {
              name
              landingImage {
                fluid {
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
              backgroundImages {
                fluid {
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
          }
        `}
        render={({ contentfulAbout }) => {
          const currentBG =
            contentfulAbout.backgroundImages[pageBackground].fluid;
          return (
            <Layout>
              <GlobalStyle />
              {!isLoggedIn ? (
                <BackgroundImage
                  Tag="section"
                  fluid={contentfulAbout.landingImage.fluid}
                  fadeIn
                  backgroundColor={theme.black}
                >
                  <Landing
                    theme={theme}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isLoggedIn={isLoggedIn}
                    password={values.password}
                  />
                </BackgroundImage>
              ) : (
                <BackgroundImage
                  Tag="section"
                  fluid={currentBG}
                  fadeIn
                  backgroundColor={theme.black}
                >
                  <Container theme={theme}>{pages[pageIndex]}</Container>
                </BackgroundImage>
              )}
            </Layout>
          );
        }}
      />
    </animated.div>
  );
};

export default HomePage;
