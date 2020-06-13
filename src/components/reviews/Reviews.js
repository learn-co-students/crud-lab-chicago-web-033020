import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    const belongToReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return belongToReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;