import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
  }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return { ...state, restaurants: state.restaurants.concat(restaurant) }

        case 'DELETE_RESTAURANT':
            return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return { ...state, reviews: state.reviews.concat(review) }

        case 'DELETE_REVIEW': 
            return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

        default:
            return state
    }
}