import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'
import HomeDetail from '../screens/HomeDetail'

// Components
import Header from '../components/Header'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#DF4A58',
          elevation: 0,
          shadowColor: 0
        },
        headerTitle: () => <Header />,
        headerTintColor: '#fff'
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  )
}

export default HomeStack
