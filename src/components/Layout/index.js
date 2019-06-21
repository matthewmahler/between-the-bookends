import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Section = styled.section`
  background: aliceblue;
  color: #333;
  min-height: 100vh;
  & > h1 {
    font-size: 28px;
    font-weight: bold;
  }

  & > small {
    color: #fff;
    border-radius: 3px;
    display: inline-block;
    background: #16799d;
    font-size: 12px;
  }

  & > article {
    background: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      background: #fff;
      transform: rotate(-2deg);
      z-index: -1;
    }
  }

  & > article > h1 {
    color: #555;
    font-size: 24px;
    font-weight: bold;
  }

  & > article > h2 {
    color: #555;
    font-size: 21px;
    font-weight: bold;
  }

  & > article > p {
    line-height: 1.6;
    font-size: 16px;
  }

  & > article > img {
    max-width: 100%;
    height: auto;
  }
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
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <Section>{children}</Section>
        </>
      )}
    />
  );
}

export default Layout;
