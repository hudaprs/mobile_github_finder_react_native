import React from 'react'

// Navigations
import RootStack from './src/navigations/RootStack'

// Redux
import {Provider} from 'react-redux'
import store from './src/redux'

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default App
