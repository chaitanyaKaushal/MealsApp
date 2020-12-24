import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import MealsFlatList from '../components/MealsFlatList'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam('categoryId')

  const availableMeals = useSelector((state) => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  )
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.handleFavorite}>
        <Text style={styles.title}>No Meals Found!</Text>
        <Text style={styles.content}>Try checking Your Filters</Text>
      </View>
    )
  }
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

const styles = StyleSheet.create({
  handleFavorite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'open-sans-bold',
    color: Colors.accentColor,
  },
  content: {
    marginVertical: 20,
    fontFamily: 'open-sans',
    color: Colors.highlight,
  },
})

export default CategoryMealsScreen
