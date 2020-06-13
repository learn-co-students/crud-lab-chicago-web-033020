import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchAsProps = (disptach) => {
  return {
    addReview: (review) => disptach({ type: 'ADD_REVIEW', review }),
    deleteReview: (id) => disptach({ type: 'DELETE_REVIEW', id })
  }
}

export default connect(mapStateToProps, mapDispatchAsProps)(ReviewsContainer)
