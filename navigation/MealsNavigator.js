//go back and forth between screens
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack' //object or React component which will hold the navigation configuration and do the heavy lifting of loading the pages and makes smooth transition between A to B.
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import Colors from '../constants/Colors'
import { Text, Platform } from 'react-native'
// Working with TabsNavigator
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
// working with navigation-drawer
import { createDrawerNavigator } from 'react-navigation-drawer'
import FiltersScreen from '../screens/FiltersScreen'

const MealsNavigator = createStackNavigator(
  {
    //telling what screens we are going to navigate between and we create a pointer to each value which forms the key
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen, // priority of styling -> 1
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      //priority of Styling ->2
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? '' : Colors.primaryColor,
      },
      headerTintColor:
        Platform.OS === 'android' ? 'black' : Colors.primaryColor,
      headerTitle: 'A Screen',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
    },
    mode: 'card',
  }
)

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:
        Platform.OS === 'android' ? 'black' : Colors.primaryColor,
      mode: 'card',
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.primaryColor,
      },
      headerTitle: 'A Screen',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
    },
  }
)

const tabCommonConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        tabBarLabel: 'Meals'
        return (
          <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        )
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
        ) : (
          'Meals' //other settings wont change for ios,i.e.Text styling would not work
        ),
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.highlight,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
        ) : (
          'Favorites'
        ),
    },
  },
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabCommonConfig, {
        // activeColor: Colors.primaryColor,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
        shifting: true,
        activeColor: 'black',
      })
    : createBottomTabNavigator(tabCommonConfig, {
        tabBarOptions: {
          activeTintColor: 'black',
          // inactiveTintColor: 'blue',
          activeBackgroundColor: Colors.primaryColor,
          inactiveBackgroundColor: '#ccc',
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
        },
      })

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:
        Platform.OS === 'android' ? 'black' : Colors.primaryColor,
      mode: 'card',
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : Colors.primaryColor,
      },
      headerTitle: 'Filters',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans',
      },
    },
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        // textAlign:'center',
        fontFamily: 'open-sans-bold',
      },
    },
  }
)

export default createAppContainer(DrawerNavigator)
