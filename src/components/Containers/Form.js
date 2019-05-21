import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { createClient } from 'contentful-management';
import useForm from '../../hooks/useForm';
import FormContainer from '../StyledComponents/FormContainer';
const client = createClient({
  accessToken: process.env.GATSBY_CONTENT_MANAGEMENT_TOKEN,
});

const Form = props => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  const { values, handleChange, handleSubmit } = useForm(submitForm);
  const [submitSuccess, handleSubmission] = useState(false);
  const [progress, updateProgress] = useState(0);

  //submit form
  //create entry
  //publish entry
  //link entry
  //rebuild

  function submitForm() {
    const entry_id = Math.floor(Math.random() * 1000000);
    const keys = Object.keys(values);
    const pairs = Object.values(values);
    let result = {};
    keys.forEach((key, i) => (result[key] = { 'en-US': pairs[i] }));
    console.log('post submitted: ', result);
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
      .then(entry => publishEntry(entry, entry_id))
      .catch(console.error);
    updateProgress(25);
  }
  function publishEntry(entry, entry_id) {
    console.log('entry publishing: ', entry);
    client
      .getSpace(process.env.GATSBY_SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.getEntry(entry_id))
      .then(entry => entry.publish())
      .then(() => linkEntry(entry_id))
      .catch(console.error);
    updateProgress(50);
  }

  function linkEntry(entry_id) {
    const blogPageId = '01Mqn4sAJ8kRaqwHEIhfFQ';
    const newPost = {
      sys: {
        type: 'Link',
        linkType: 'Entry',
        id: JSON.stringify(entry_id),
      },
    };
    client
      .getSpace(process.env.GATSBY_SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.getEntry(blogPageId))
      .then(entry => {
        console.log('blogPage updating: ', entry);

        entry.fields.blogPosts['en-US'].push(newPost);

        return entry.update();
      })
      .then(() => republishBlogPage(blogPageId))
      .catch(console.error);
    updateProgress(75);
  }
  function republishBlogPage(blogPageId) {
    console.log('blogPage republishing publishing:', blogPageId);
    client
      .getSpace(process.env.GATSBY_SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.getEntry(blogPageId))
      .then(entry => entry.publish())
      .then(() => triggerRebuild(blogPageId))
      .catch(console.error);
    updateProgress(95);
  }
  function triggerRebuild(entry_id) {
    const url = `https://api.netlify.com/build_hooks/5cddeec89caf5bf9cf5b4fba?trigger_title=${entry_id}`;

    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    }).then(response => {
      updateProgress(100);
      handleSubmission(true);
    });
  }

  return (
    <FormContainer theme={props.theme}>
      <animated.div style={fade}>
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
      </animated.div>
    </FormContainer>
  );
};

export default Form;
