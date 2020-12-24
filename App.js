import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import MealsNavigator from './navigation/MealsNavigator'
import { enableScreens } from 'react-native-screens'
enableScreens()

import { LogBox } from 'react-native'
LogBox.ignoreAllLogs()

import { createStore, combineReducers } from 'redux'
import mealsReducer from './centralstore/reducers/meals'

const rootReducer = combineReducers({
  meals: mealsReducer,
})

const store = createStore(rootReducer) //creating the redux store

import { Provider } from 'react-redux'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
