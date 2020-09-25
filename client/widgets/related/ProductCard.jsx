import React from 'react';
import dummy from './dummy_data.js';

var ProductCard = (props) => {
  var product = props.current;

  return (
    <div>
      {/* <img src="{need to pull in image url from proper table in Products API}"/> */}
      <h4>{product.name}</h4>
      <p>{product.category.toUpperCase()}</p>
      <p>${product.default_price}</p>
      {/* need to pull in star rating here from Reviews API */}
    </div>
  );
};

export default ProductCard;

/* TODO:
 * render...
 * main product thumbnail
 * action button (dynamic based on related vs outfit)
 * category
 * product name
 * price
 * star rating (will add later)
 */