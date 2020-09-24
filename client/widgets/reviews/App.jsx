import React, {Component} from 'react';
import dummyData from './dummyData';


class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product = dummyData,
    }

    //binding of methods

  }

  componentDidMount() {

  }

  //get and post request

  render() {

    return (
      <div>
       This is where the reviews are suppose to be
       <ReviewList reviews={this.state.product}/>
      </div>
    )
  }
}

export default Review;