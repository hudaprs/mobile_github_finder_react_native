import {
  GET_USERS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  USERNAME_CHANGED,
  SEARCH_USERS,
  GET_REPOS
} from '../types/gitHubTypes'
import axios from 'axios'

const clientId = 'yourClientId'
const clientSecret = 'yourClientSecret'

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const usernameChanged = (username) => {
  return {
    type: USERNAME_CHANGED,
    payload: username
  }
}

// Clear Users
export const clearUsers = () => {
  return {
    type: CLEAR_USERS
  }
}

// Get all users
export const getUsers = () => async (dispatch) => {
  dispatch(setLoading())
  try {
    const response = await axios.get(
      `https://api.github.com/users?client_id=${clientId}&client_secret=${clientSecret}`
    )

    dispatch({type: GET_USERS, payload: response.data})
  } catch (err) {
    console.error(err)
  }
}

// Get user
export const getUser = (username) => async (dispatch) => {
  dispatch(setLoading())
  try {
    const getUser = await axios.get(
      `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`
    )

    dispatch({type: GET_USER, payload: getUser.data})
  } catch (err) {
    console.log(err)
  }
}

// Search Users
export const searchUsers = (username) => async (dispatch) => {
  dispatch(setLoading())
  try {
    const getUsers = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${clientId}&client_secret=${clientSecret}`
    )

    dispatch({type: SEARCH_USERS, payload: getUsers.data.items})
  } catch (err) {
    console.error(err.message)
  }
}

// Get Repos
export const getUserRepos = (username) => async (dispatch) => {
  dispatch(setLoading())
  try {
    const getUsers = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`
    )
    dispatch({type: GET_REPOS, payload: getUsers.data})
  } catch (err) {
    console.log(err)
  }
}
