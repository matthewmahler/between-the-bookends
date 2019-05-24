import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import TimeLineMedia from './TimeLineMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 30vw;
  max-width: 400px;
  background: ${props => props.theme.white}bb;
  color: ${props => props.theme.black};
  border-radius: 1em;
  padding: 1em;
  box-sizing: border-box;
  h3 {
    margin-bottom: 0;
  }
`;

const TimeLinePoint = props => {
  const newDate = moment(props.point.date).format('MMMM Do YYYY');
  return (
    <Container theme={props.theme}>
      <h3>{props.point.title}</h3>
      <p>{newDate}</p>
      <TimeLineMedia media={props.point.media} />
    </Container>
  );
};

export default TimeLinePoint;
