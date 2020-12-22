import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import MealsFlatList from '../components/MealsFlatList'

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam('categoryId')
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  )

  return (
    <MealsFlatList listData={displayedMeals} navigation={props.navigation} />
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catID = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID)

  return {
    headerTitle: selectedCategory.title,
  }
}

export default CategoryMealsScreen
