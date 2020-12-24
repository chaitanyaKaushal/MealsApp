//ACTION NUMBER 1
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE' //type
//action ->
export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id } //{type,payload}
}

// ACTION NUMBER 2
export const SET_FILTERS = 'SET_FILTERS' //type
export const setFilters = (filterSettings) => {
  return { type: SET_FILTERS, filters: filterSettings }
}
