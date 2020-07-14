import React, {Fragment} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

// Global Styles
import {globalStyles} from '../styles/global'

const GitHubUsers = ({user, navigation}) => {
  const {each} = styles
  const {btn, btnText, box, boxItem, boxTitle} = globalStyles

  const {avatar_url, login} = user

  return (
    <Fragment>
      <View style={[box, each]}>
        <View style={boxItem}>
          <Image
            style={{width: 50, height: 50, borderRadius: 50 / 2}}
            source={{
              uri: avatar_url
            }}
          />
          <Text style={boxTitle}>{login}</Text>

          <View style={{marginBottom: 10}}></View>

          <TouchableOpacity
            style={btn}
            onPress={() =>
              navigation.navigate('HomeDetail', {
                username: login
              })
            }>
            <Text style={btnText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  )
}

GitHubUsers.propTyes = {
  user: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  each: {
    flexBasis: '48%'
  }
})

export default GitHubUsers
