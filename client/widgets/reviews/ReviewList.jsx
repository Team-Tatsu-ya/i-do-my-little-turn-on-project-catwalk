import React from 'react';
import OneReview from './OneReview.jsx';

const ReviewList = (props) => {
  return (
    <div>
      {props.reviews.results.map((individualReview, i) => {
        return <OneReview key={i} individual={individualReview}/>
      })}
    </div>
  );
};

export default ReviewList;