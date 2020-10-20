import { createSlice } from '@reduxjs/toolkit'
import firebase, { auth } from './firebase'
import { addContact, addNewUser, initUser } from './db/user'

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
      state.users.findIndex((element) => element?.uid === uid) &&
        (state.current = uid)
    },
    setCurrentNull: (state) => {
      state.current = null
      state.users = []
    },
    addUser: (state, action) => {
      const { user } = action.payload
      if (!state.users.find((element) => element.uid === user.uid)) {
        state.users.push(user)
      }
    },
  },
})

export const { setCurrent, setCurrentNull, addUser } = userSlice.actions

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
  await auth.onAuthStateChanged(async (user) => {
    if (user) {
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
  await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  const snapshot = await auth.signInWithEmailAndPassword(email, password)
  const user = {
    uid: snapshot.user.uid,
    email: snapshot.user.email,
    username: snapshot.user.displayName,
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
  // TODO: Replace with backend createUser instead
  await auth.createUserWithEmailAndPassword(email, password)
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
 * @function logout
 * @async
 * @description logging from firebase auth
 */
export const logout = () => async (dispatch) => {
  await auth.signOut()
  dispatch(setCurrentNull())
}

/**
 * @function selectCurrentUser
 * @param {object} state
 * @description redux selector hook to retrieve the current user instance
 */
export const selectCurrentUser = (state) =>
  state.user.users.find((element) => element.uid === state.user.current)

/**
 * @function selectUserByID
 * @param {object} state
 * @param {string} id
 * @description redux selector hook to retrieve specific user from users array
 */
export const selectUserByID = (state, uid) =>
  state.user.users.find((element) => (element.uid = uid))

export default userSlice.reducer
