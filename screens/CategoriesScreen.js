import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const renderGridItem = (props, itemData) => {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() =>
        props.navigation.navigate({
          routeName: 'CategoryMeals', // paint the selected item on the CategoryMeals canvas
          params: { categoryId: itemData.item.id },
        })
      }
    />
  )
}

const CategoriesScreen = (props) => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem.bind(this, props)}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories', // prioriy of styling ->3
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName='ios-menu'
            title='Menu'
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoriesScreen
