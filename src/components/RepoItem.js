import React from 'react'
import {View, Text, Linking} from 'react-native'
import PropTypes from 'prop-types'

// Global Styles
import {globalStyles} from '../styles/global'

const RepoItem = ({repo}) => {
  const {box, boxItem} = globalStyles

  return (
    <View style={box}>
      <View style={[boxItem, {marginRight: 'auto'}]}>
        <Text
          style={{color: '#DF4A58', fontWeight: 'bold'}}
          onPress={() => Linking.openURL(repo.html_url)}>
          {repo.name}
        </Text>
      </View>
    </View>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem
