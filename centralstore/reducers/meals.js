import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      )
      if (existingIndex >= 0) {
        //returns state without the id one
        const updatedFavoriteMeals = state.favoriteMeals.filter(
          (meal) => meal.id !== action.mealId
        )
        return { ...state, favoriteMeals: updatedFavoriteMeals }
      } else {
        //returns the state with the new id one
        const newMeal = state.meals.find((meal) => meal.id === action.mealId)
        const updatedFavoriteMeals = [...state.favoriteMeals, newMeal]
        return { ...state, favoriteMeals: updatedFavoriteMeals }
      }
    default:
      return state // default state is reached when our app starts and the redux is initialized
  }
}

export default mealsReducer
