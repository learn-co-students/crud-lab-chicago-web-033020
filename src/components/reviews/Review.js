import React, { Component } from 'react';

class Review extends Component {


  
  render() {
    
    console.log('REVIEW', this.props.review.id)
    const { review } = this.props


    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(this.props.review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
