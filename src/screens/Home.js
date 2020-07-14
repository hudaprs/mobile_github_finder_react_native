import React from 'react'
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

// Components
import Splash from '../components/Splash'
import SearchForm from '../components/SearchForm'
import GitHubUsers from '../components/GitHubUsers'

// Redux
import {connect} from 'react-redux'

// Global Styles
import {globalStyles} from '../styles/global'

const Home = ({navigation, gitHub}) => {
  const {users, loading} = gitHub
  const {container} = globalStyles
  const {usersContainer, row} = styles

  if (loading) {
    return <Splash />
  }

  return (
    <SafeAreaView style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchForm users={users} />
        <View style={usersContainer}>
          <View style={row}>
            {users.length > 0 &&
              users.map((user) => (
                <GitHubUsers
                  key={user.id}
                  user={user}
                  navigation={navigation}
                />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  usersContainer: {
    marginTop: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

Home.propTypes = {
  gitHub: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  gitHub: state.gitHub
})

export default connect(mapStateToProps)(Home)
