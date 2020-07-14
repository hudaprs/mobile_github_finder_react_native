import React, {Fragment} from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import PropTypes from 'prop-types'

// Global Styles
import {globalStyles} from '../styles/global'

// Redux
import {connect} from 'react-redux'
import {
  clearUsers,
  usernameChanged,
  searchUsers
} from '../redux/actions/gitHubActions'

const SearchForm = ({
  users,
  clearUsers,
  username,
  usernameChanged,
  searchUsers
}) => {
  const {input} = styles
  const {btn, btnLight, btnTextLight, btnText} = globalStyles

  const onSearchButtonPress = () => {
    if (!username) {
      alert('Fill the forms!')
    } else {
      searchUsers(username)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={input}
          placeholder="Search User..."
          onChangeText={(username) => usernameChanged(username)}
          value={username}
        />
        <TouchableOpacity style={btn} onPress={onSearchButtonPress}>
          <Text style={btnText}>Search</Text>
        </TouchableOpacity>
        {users.length > 0 && (
          <Fragment>
            <View style={{marginTop: 10}} />
            <TouchableOpacity style={[btn, btnLight]} onPress={clearUsers}>
              <Text style={[btnText, btnTextLight]}>Clear</Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

SearchForm.propTypes = {
  users: PropTypes.array.isRequired,
  username: PropTypes.string,
  usernameChanged: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Roboto-Regular'
  }
})

const mapStateToProps = (state) => ({
  username: state.gitHub.username
})

export default connect(mapStateToProps, {
  clearUsers,
  usernameChanged,
  searchUsers
})(SearchForm)
