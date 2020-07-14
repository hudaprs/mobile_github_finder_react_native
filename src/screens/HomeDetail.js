import React, {useEffect} from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Linking
} from 'react-native'
import PropTypes from 'prop-types'

// Components
import Splash from '../components/Splash'
import Repos from '../components/Repos'

// Global Styles
import {globalStyles} from '../styles/global'

// Icon
import Icon from 'react-native-vector-icons/dist/FontAwesome'

// Redux
import {connect} from 'react-redux'
import {getUser, getUserRepos} from '../redux/actions/gitHubActions'
import {TouchableOpacity} from 'react-native-gesture-handler'

const HomeDetail = ({route, getUser, user, getUserRepos, loading, repos}) => {
  const {username} = route.params
  const {
    container,
    box,
    boxItem,
    btnText,
    btn,
    badge,
    bgDanger,
    bgLight,
    bgDark,
    bgSuccess,
    badgeText,
    badgeTextDark
  } = globalStyles

  const {
    login,
    html_url,
    avatar_url,
    name,
    company,
    blog,
    location,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following
  } = user

  useEffect(() => {
    getUser(username)
    getUserRepos(username)
  }, [])

  if (loading) {
    return <Splash />
  }

  return (
    <SafeAreaView style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{marginBottom: 10}}>
            Hireable{' '}
            {hireable ? (
              <Icon name="check" size={15} color={'green'} />
            ) : (
              <Icon name="times" size={15} color={'red'} />
            )}
          </Text>

          {/* Bio */}
          <View style={box}>
            <View style={boxItem}>
              <Image
                source={{uri: avatar_url}}
                style={{width: 150, height: 150, borderRadius: 150 / 2}}
              />

              <Text style={{fontSize: 24, fontWeight: 'bold'}}>{name}</Text>

              {location && <Text>Location: {location}</Text>}

              <View style={{marginTop: 5}} />

              {bio && (
                <>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>Bio</Text>
                  <Text style={{textAlign: 'center'}}>Bio: {bio}</Text>
                </>
              )}

              <View style={{marginBottom: 5}} />

              <TouchableOpacity
                style={btn}
                onPress={() => Linking.openURL(html_url)}>
                <Text style={btnText}>Visit GitHub Profile</Text>
              </TouchableOpacity>

              <View style={{marginBottom: 5}} />

              {username && (
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Username:</Text> {username}
                </Text>
              )}

              {company && (
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Company:</Text> {company}
                </Text>
              )}
            </View>
          </View>

          {/* Gists */}
          <View style={box}>
            <View style={[boxItem, {flexDirection: 'column'}]}>
              {/* Followers */}
              <View style={[badge, bgDanger]}>
                <Text style={badgeText}>Followers: {followers}</Text>
              </View>
              {/* Following */}
              <View style={[badge, bgSuccess]}>
                <Text style={badgeText}>Following: {following}</Text>
              </View>
              {/* Public Repos */}
              <View style={[badge, bgLight]}>
                <Text style={badgeTextDark}>Public Repos: {public_repos}</Text>
              </View>
              {/* Public Gists */}
              <View style={[badge, bgDark]}>
                <Text style={badgeText}>Public Gists: {public_gists}</Text>
              </View>
            </View>
          </View>

          {/* Repos */}
          <Repos repos={repos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

HomeDetail.propTypes = {
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  user: state.gitHub.user,
  loading: state.gitHub.loading,
  repos: state.gitHub.repos
})

export default connect(mapStateToProps, {getUser, getUserRepos})(HomeDetail)
