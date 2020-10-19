import { createSlice } from '@reduxjs/toolkit'
import { auth } from './firebase'
import { addContact, addNewUser, initUser } from './db/user'
import User from './utils/object/user'

const defaultUser = {
  name: 'Default',
}

/**
 * @description user redux slice instantiated with createSlice()
 */
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // Users is a list containing encountered users
    users: [],
    current: null,
  },
  reducers: {
    setCurrent: (state, action) => {
      const { uid } = action.payload
      state.users.filter((element) => element?.uid === uid) &&
        (state.current = uid)
    },
    logout: (state) => {
      state.current = null
    },
    addUser: (state, action) => {
      const { user } = action.payload
      state.users.push(user)
    },
  },
})

export const { setCurrent, logout, addUser } = userSlice.actions

/**
 * @function init
 * @param {string} uid
 * @async
 * @description retrieve user data from database
 */
export const init = (uid) => async (dispatch) => {
  const userData = await initUser(uid)
  dispatch(addUser({ user: userData }))
}

export const autoConnect = () => async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const userData = await initUser(user.uid)
      const newUser = {
        uid: user.uid,
        email: userData.email,
        username: userData.username,
      }
      dispatch(addUser({ user: newUser }))
      dispatch(setCurrent({ uid: user.uid }))
    }
  })
}
/**
 * @function singIn
 * @param {string} email
 * @param {string} password
 * @async
 * @description Call firebase auth signin methods to obtain user token
 */
export const signIn = (email, password) => async (dispatch) => {
  const snapshot = await auth.signInWithEmailAndPassword(email, password)
  const user = {
    uid: snapshot.user.uid,
    email: snapshot.user.email,
  }
  dispatch(addUser({ user }))
  dispatch(setCurrent({ uid: snapshot.user.uid }))
}

/**
 * @function signUp
 * @param {string} displayName
 * @param {string} email
 * @param {string} password
 * @async
 * @description Call firebase auth create user with email and password method to signup a new user
 */
export const signUp = (username, email, password) => async (dispatch) => {
  const snapshot = await auth.createUserWithEmailAndPassword(email, password)
  await addNewUser({
    user: snapshot.user,
    username,
  })
}

/**
 * @function addToContact
 * @param {string} uid
 * @async
 * @description Adding user in the contactList property of the user in the database
 */
export const addToContact = (uid) => async (dispatch) => {
  await addContact(auth.currentUser.uid, uid)
  dispatch()
}

/**
 * @function selectCurrentUser
 * @param {object} state
 * @description redux selector hook to retrieve the current user instance
 */
export const selectCurrentUser = (state) =>
  defaultUser ?? state.user.users.get(state.user.current)

/**
 * @function selectUserByID
 * @param {object} state
 * @param {string} id
 * @description redux selector hook to retrieve specific user from users array
 */
export const selectUserByID = (state, uid) =>
  state.user.users.filter((element) => (element.uid = uid))

export default userSlice.reducer
