import React, { useState, useRef } from 'react'
import { View, ScrollView, Image, Text, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Header } from 'react-native/Libraries/NewAppScreen'
import HeaderButton from '../components/HeaderButton'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={{ fontFamily: 'open-sans' }}>{props.children}</Text>
    </View>
  )
}

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const counter = useRef(null)
  counter.current = 0
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
      <View style={styles.details}>
        <Text style={{ fontFamily: 'open-sans', color: 'brown' }}>
          {selectedMeal.duration}m
        </Text>
        <Text style={{ fontFamily: 'open-sans', color: 'brown' }}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={{ fontFamily: 'open-sans', color: 'brown' }}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => {
        return (
          <ListItem key={ingredient}>
            {'\u2022'}
            {'  '}
            {ingredient}
          </ListItem>
        )
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => {
        counter.current = counter.current + 1
        return (
          <ListItem key={step}>
            {counter.current}
            {')  '}
            {step}
          </ListItem>
        )
      })}
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='star'
          onPress={() => {
            console.log('selected')
          }}
          style={styles.icon}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 22,
  },
  img: {
    height: 200,
    width: '100%',
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
})

export default MealDetailsScreen