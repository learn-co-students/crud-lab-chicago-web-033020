import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const review = { text: this.state.text, restaurantId: this.props.restaurantId }
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review:</label>
          <input type='text' onChange={this.handleChange} value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
