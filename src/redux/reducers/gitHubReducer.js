import {
  GET_USERS,
  GET_USER,
  SET_LOADING,
  CLEAR_USERS,
  USERNAME_CHANGED,
  SEARCH_USERS,
  GET_REPOS
} from '../types/gitHubTypes'

const initialState = {
  username: '',
  loading: false,
  users: [],
  user: {},
  repos: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: payload
      }
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: payload
      }
    case CLEAR_USERS:
      return {
        ...state,
        username: '',
        users: []
      }
    case USERNAME_CHANGED:
      return {
        ...state,
        username: payload
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      }
    case GET_REPOS:
      return {
        ...state,
        repos: payload
      }
    default:
      return state
  }
}
