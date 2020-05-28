import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  padding: 2em;
  box-sizing: border-box;
  background: ${(props) => props.theme.black}cc;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 1em;
  .formContainer {
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
        padding: 0.1em;
        color: ${(props) => props.theme.white};
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }

      .title,
      .postBody,
      .postDate,
      .signature {
        padding: 0.5em;
        font-size: 1.5em;
        background-color: ${(props) => props.theme.lightGray};
        color: ${(props) => props.theme.black};
      }
      .title,
      .postBody {
        min-width: 30vw;
        width: 90%;
      }
      .postBody {
        min-height: 40vh;
      }
      button {
        max-width: 350px;
        width: 100%;
        background-color: ${(props) => props.theme.darkBlue};
        color: ${(props) => props.theme.white};
        padding: 1em;
        margin: 1em 0;
        font-size: 2em;
        border: 3px solid ${(props) => props.theme.lightBlue};
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 700px;
  }
  @media (max-width: 450px) {
    width: 90% !important;

    max-width: 350px;
    min-height: 100vh;
    .formContainer {
      width: 350px;

      form {
        .field {
          width: 320px;
          label {
            font-size: 1rem;
          }
        }
        .dateSig {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
const FormContainer = ({ children, theme }) => {
  return <Container theme={theme}>{children}</Container>;
};

export default FormContainer;
