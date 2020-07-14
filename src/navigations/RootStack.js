import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Navigations
import HomeStack from './HomeStack'

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="App" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
