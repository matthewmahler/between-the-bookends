import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const GlobalStyle = createGlobalStyle`
html{
  font-family: "Montserrat", sans-serif; 
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  background-color: black;
}
   

  body {
    margin:0;
    h1,
    h2,
    h3, 
    h4{
  font-family: 'miller';

}
}
  
  @media all and (max-width: 1200px) {
    html{
      margin: 0;
    }
    h1,
    h2,
    h3,
    h4{
      font-family: 'miller';
      text-align: center;
    }
    
  }
  ::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
  }
`;
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background-size: cover;
  box-shadow: 0 0 2em 2em ${(props) => props.theme.black} inset;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
`;
function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          contentfulAbout {
            backgroundImages {
              fluid {
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
      render={(data) => {
        const pageBackground = Math.floor(Math.random() * 7);

        const currentBG =
          data.contentfulAbout.backgroundImages[pageBackground].fluid;
        return (
          <>
            <Helmet title={data.site.siteMetadata.title}>
              <html lang="en" />
            </Helmet>
            <GlobalStyle />
            <BackgroundImage
              Tag="section"
              fluid={currentBG}
              fadeIn
              backgroundColor="#040404"
            >
              <Container>{children}</Container>
            </BackgroundImage>
          </>
        );
      }}
    />
  );
}

export default Layout;
