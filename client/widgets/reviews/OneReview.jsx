import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const OneReview = (props) => {
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={props.individual.rating}
        precision={0.5}
        readOnly
      />
      {props.individual.summary}
      {props.individual.date}
      {props.individual.reviewer_name}
      {props.individual.body}
      {props.individual.response}
    </div>
  )
};

export default OneReview;