import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = {id: cuidFn(), text: action.text}
      return {...state, restaurants: [...state.restaurants, newRestaurant]}
    case "DELETE_RESTAURANT":
      const updatedRestaurants = state.restaurants.filter(restaurantObj => restaurantObj.id !== action.id)
      return {...state, restaurants: updatedRestaurants}
    case "ADD_REVIEW":
      const newReview = {id: cuidFn(), text: action.review.text, restaurantId: action.review.restaurantId}
      return {...state, reviews: [...state.reviews, newReview]}
    case "DELETE_REVIEW":
      const updatedReviews = state.reviews.filter(reviewObj=> reviewObj.id !== action.id )
      return {...state, reviews: updatedReviews}
    default:
      return state
  }
}
