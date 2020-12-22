import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from '../components/MealItem'

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: { mealId: itemData.item.id },
          })
        }
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
      />
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealList
