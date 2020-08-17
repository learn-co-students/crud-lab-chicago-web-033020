import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  
  renderRestaurants = () => {
    return this.props.restaurants.map((restaurant) => (
      <Restaurant 
        key={restaurant.id} 
        restaurant={restaurant} 
        deleteRestaurant={this.props.deleteRestaurant}
      />
    ));
  }; 

  render() {
    console.log(this.props)
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;