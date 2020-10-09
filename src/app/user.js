import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: new Map(),
    current: null,
  },
  reducers: {
    setCurrent: (state, action) => {
      const { uid } = action.payload
      state.users.has(uid) && (state.current = uid)
    },
    logout: (state) => {
      state.current = null
    },
  },
})

export const { setCurrent, logout } = userSlice.actions

export const init = (uid) => async (dispatch) => {
  //TODO: Backend call in async
}

export const signIn = (user) => async (dispatch) => {
  //TODO: Backend call in async
  //TODO: use `init` function to add to local record
}

export const signUp = (data) => async (dispatch) => {
  //TODO: Backend call in async
}

export const addToContact = (uid) => async (dispatch) => {
  //TODO: Backend call in async
}

export const selectCurrentUser = (state) =>
  state.user.users.get(state.user.current)
export const selectUserByID = (state, id) => state.user.users.get(id)

export default userSlice.reducer
