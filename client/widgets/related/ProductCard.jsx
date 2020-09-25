import React from "react";
import dummy from "./dummy_data.js";

var productCard = (props) => {
  var product = dummy.dummyProduct;

  return (
    <div>
      <b>{product.name}</b>
      {product.category}
      {product.default_price}
    </div>
  )
};

/* TODO:
 * render...
 * main product thumbnail
 * action button (dynamic based on related vs outfit)
 * category
 * product name
 * price
 * star rating (will add later)
 */