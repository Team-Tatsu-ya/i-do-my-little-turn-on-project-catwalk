import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var sampleData = {
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  "category": "Basketball Shoes",
  "default_price": "0",
  "features": [
    {
      "feature": "Sole",
      "value": "Rubber"
    },
    {
      "feature": "Material",
      "value": "FullControlSkin"
    },
  ],
};

var sampleStyles = [
  {
    "style_id": 1,
    "name": "Forest Green & Black",
    "original_price": "140",
    "sale_price": "0",
    "default?": 1,
    "photos": [
      {
        "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        "url": "urlplaceholder/style_1_photo_number.jpg"
      },
      {
        "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        "url": "urlplaceholder/style_1_photo_number.jpg"
      }
      // ...
    ],
    "skus": {
      "XS": 8,
      "S": 16,
      "M": 17,
      "L": 10,
      "XL": 15
    }
  },

  {
    "style_id": 2,
    "name": "Desert Brown & Tan",
    "original_price": "140",
    "sale_price": "0",
    "default?": 0,
    "photos": [
      {
        "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
        "url": "urlplaceholder/style_2_photo_number.jpg"
      }
    ],
    "skus": {
      "S": 16,
      "XS": 8,
      "M": 17,
      "L": 10,
      "XL": 15,
      "XXL": 6
    }
  }];

var sampleStyle = {
  "style_id": 1,
  "name": "Forest Green & Black",
  "original_price": "140",
  "sale_price": "0",
  "default?": 1,
  "photos": [
    {
      "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
      "url": "urlplaceholder/style_1_photo_number.jpg"
    },
    {
      "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
      "url": "urlplaceholder/style_1_photo_number.jpg"
    }
    // ...
  ],
  "skus": {
    "XS": 8,
    "S": 16,
    "M": 17,
    "L": 10,
    "XL": 15
  }
}

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: sampleData,
      currentStyles: sampleStyles,
      currentStyle: sampleStyle,
      currentSize: 'XS',
      quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    };
  }

  render() {
    <div>
      <div id="gallery">
        <img src="https://i.imgur.com/ExaWZF0.jpg"></img>
      </div>
      <div id="overview">
        <div id="heading">
          <div id="stars">☆☆☆☆☆ <em>Read all reviews</em></div>
          <div id="category">{this.state.currentProduct.category}</div>
          <div id="title">{this.state.currentProduct.name}</div>
        </div>
        <div id="styleselect">
          <div id="price">{this.state.currentProduct.default_price}</div>
          <div id="styletext"><strong>style: </strong> selected style</div>
          <div id="styleBubbles">
            {this.state.currentStyles.map((style) => {
              return (
                <div class="style bubble">
                  <img src={style.photos[0].thumbnail_url}></img>
                </div>
              )
            }
            )}
          </div>
          <div class="dropdown" id="selectsize">
            <select>
              <option value="select size">select size</option>
              {Object.keys(this.state.currentStyle.skus).map((sku) => {
                return (
                  <option value={sku}>{sku}</option>
                )
              })}
            </select>
          </div>
          <div class="dropdown" id="selectqty">
            <select size={this.state.currentStyle.skus[this.state.currentSize]}>
              {this.state.quantities.map((num) => {
                return (
                  <option value={num}>{num}</option>
                )
              })}
            </select>
          </div>
          <div id="addto">
            <button>add to bag</button>
            <button>☆</button>
          </div>

        </div>
      </div>

      <div id="deets">
        <div id="pitch">
          <div id="slogan">{this.state.currentProduct.slogan}</div>
          <div id="desc">{this.state.currentProduct.description}</div>
        </div>
        <div id="tickboxes">
          <div id="checked">✓ where is this data</div>
          <div id="checked">✓ i have no idea</div>
          <div id="checked">✓ it doesn't look like the features data</div>
          <div id="checked">✓ but i guess it must be</div>
        </div>
      </div>
    </div>
  }

}

ReactDOM.render(<Details />, document.getElementById('description'));