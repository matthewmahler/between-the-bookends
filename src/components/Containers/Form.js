import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { createClient } from 'contentful-management';
const client = createClient({
  accessToken: process.env.GATSBY_CONTENT_MANAGEMENT_TOKEN,
});

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  background-size: cover;
  box-shadow: 0 0 2em 2em ${props => props.theme.black} inset;
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
    }

    .title,
    .postBody,
    .postDate,
    .signature {
      padding: 0.5em;

      font-size: 1.5em;
      background-color: ${props => props.theme.white};
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

const Form = props => {
  const { values, handleChange, handleSubmit } = useForm(submitForm);

  function submitForm() {
    console.log(values);
    const entry_id = Math.floor(Math.random() * 1000000);
    const keys = Object.keys(values);
    const pairs = Object.values(values);
    let result = {};
    keys.forEach((key, i) => (result[key] = { 'en-US': pairs[i] }));
    console.log(result);
    client
      .getSpace(process.env.GATSBY_SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment =>
        environment.createEntryWithId('blogPost', entry_id, {
          fields: {
            ...result,
          },
        })
      )
      .then(() => publishEntry(entry_id))
      .catch(console.error);
  }
  function publishEntry(entry_id) {
    client
      .getSpace(process.env.GATSBY_SPACE_ID)
      .then(space => space.getEntry(entry_id))
      .then(entry => entry.publish())
      .then(entry => console.log(`Entry ${entry.sys.id} published.`))
      .catch(console.error);
  }

  return (
    <Container theme={props.theme}>
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <input
              className="title"
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
              required
            />
          </div>
          <div className="field">
            <label className="label">Body</label>
            <textarea
              className="postBody"
              type="textarea"
              name="postBody"
              onChange={handleChange}
              value={values.postBody}
              required
            />
          </div>
          <div className="dateSig">
            <div className="field">
              <label className="label">Date</label>
              <input
                className="postDate"
                type="date"
                name="postDate"
                onChange={handleChange}
                value={values.postDate}
                required
              />
            </div>
            <div className="field">
              <label className="label">Signature (optional)</label>
              <input
                className="signature"
                type="text"
                name="signature"
                onChange={handleChange}
                value={values.signature}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <button className="back" onClick={() => props.handleClick(0)}>
        Back
      </button>
    </Container>
  );
};

export default Form;
