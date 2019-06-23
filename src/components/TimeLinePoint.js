import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import TimeLineMedia from './TimeLineMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.black}ee;
  color: ${props => props.theme.white};
  border-radius: 1em;
  padding: 1em;
  box-sizing: border-box;
  min-width: 45vw;
  h3 {
    margin-bottom: 0;
    padding: 0.1em 0;
    border-bottom: 2px solid ${props => props.theme.blue};
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
