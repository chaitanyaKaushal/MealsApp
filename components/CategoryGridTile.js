import React from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback,
} from 'react-native'

const CategoryGridTile = (props) => {
  let ButtonComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback
  }
  return (
    <View style={styles.gridItem}>
      <ButtonComponent onPress={props.onSelect} style={{ flex: 1 }}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}{' '}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 200,
    borderRadius: 10,
    elevation: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    //ios
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right',
  },
})

export default CategoryGridTile
