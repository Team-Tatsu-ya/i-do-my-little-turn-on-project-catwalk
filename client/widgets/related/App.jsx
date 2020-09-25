import React from "react";
import ReactDOM from "react-dom";
// import components
import Comparison from "./Comparison.jsx";
import OutfitList from "./OutfitList.jsx";
import ProductCard from "./ProductCard.jsx";
import RelatedList from "./RelatedList.jsx";
// TODO: replace dummy data with a call to the Products API
import dummy from "./dummy_data.js";

class RelatedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 11
    };
  }

  // TODO: build skeleton for my app component
  // TODO: add methods for my get requests to the Products API and for updating customer's outfit data

  render () {
    return (
      <div>
        {/* <ProductCard /> */}
        {/* TODO: add other components */}
        <p>Hello world</p>
      </div>
    )
  }
}

export default RelatedApp;