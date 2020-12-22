//ACTION NUMBER 1
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE' //type
//action ->
export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id } //{type,payload}
}

// ACTION NUMBER 2
