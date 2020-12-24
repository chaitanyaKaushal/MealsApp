import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealsFlatList from '../components/MealsFlatList'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals)
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.handleFavorite}>
        <Text style={styles.title}>No Favorites!</Text>
        <Text style={styles.content}>Try Adding Some!</Text>
      </View>
    )
  }
  return <MealsFlatList listData={favMeals} navigation={props.navigation} />
}
FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
              navData.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      )
    },
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

export default FavoritesScreen
