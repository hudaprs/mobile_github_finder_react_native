import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// Icons
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Header = () => {
  const {headerContainer, headerText} = styles

  return (
    <View style={headerContainer}>
      <Icon name="github" size={40} color={'white'} />
      <Text> </Text>
      <Text style={headerText}>GitHubFinder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  headerText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  }
})
export default Header
