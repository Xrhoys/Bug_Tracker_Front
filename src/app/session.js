import { createSlice } from '@reduxjs/toolkit'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    authError: null,
  },
  reducers: {
    setAuthError: (state, action) => {
      const { error } = action.payload
      state.authError = error
    },
  },
})
