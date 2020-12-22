import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'

const FilterButton = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.contents}>{props.title}</Text>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ false: '', true: Colors.accentColor }}
        thumbColor={Colors.primaryColor}
      />
    </View>
  )
}

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  // const { navigation } = props

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterButton
        title='Gluten-Free'
        state={isGlutenFree}
        onChange={() => {
          setIsGlutenFree(!isGlutenFree)
        }}
      />
      <FilterButton
        title='Lactose-Free'
        state={isLactoseFree}
        onChange={() => {
          setIsLactoseFree(!isLactoseFree)
        }}
      />
      <FilterButton
        title='Vegan'
        state={isVegan}
        onChange={() => {
          setIsVegan(!isVegan)
        }}
      />
      <FilterButton
        title='Vegetarian'
        state={isVegetarian}
        onChange={() => {
          setIsVegetarian(!isVegetarian)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    margin: 20,
  },
  content: {
    fontFamily: 'open-sans',
  },
})

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filters',
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            iconName='ios-save'
            title='Save'
            onPress={() => {
              navData.navigation.getParam('save')()
            }}
          />
        </HeaderButtons>
      )
    },
  }
}

export default FiltersScreen
