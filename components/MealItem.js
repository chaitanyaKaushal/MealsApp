import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import Colors from '../constants/Colors'

const MealItem = (props) => {
  let ButtonComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback
  }
  return (
    <View style={{ margin: 10 }}>
      <View style={styles.mealItem}>
        <ButtonComponent onPress={props.onSelectMeal}>
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: props.image }}
                style={styles.bgImage}
              >
                {/* to get rid of double blackbox around text in ios,,wrap in another view that is done here */}
                <View style={styles.titleContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {props.title}
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
              <Text style={{ fontFamily: 'open-sans' }}>{props.duration}m</Text>
              <Text style={{ fontFamily: 'open-sans' }}>
                {props.complexity.toUpperCase()}
              </Text>
              <Text style={{ fontFamily: 'open-sans' }}>
                {props.affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </ButtonComponent>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: Colors.accentColor,
    // margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
})

export default MealItem
