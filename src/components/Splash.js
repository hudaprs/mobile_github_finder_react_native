import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// Icon
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Splash = () => {
  const {splash} = styles

  return (
    <View style={splash}>
      <Icon name="github" size={200} color={'#DF4A58'} />
      <Text>Loading....</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
})

export default Splash
