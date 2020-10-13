import { createSlice } from '@reduxjs/toolkit'
import { DASHBOARD } from './boardNames'

const mainContainerSlice = createSlice({
  name: 'mainContainer',
  initialState: {
    container: DASHBOARD,
    params: {},
  },
  reducers: {
    /**
     * set Function controlling the current state of the content of main container
     * by default, calling set() would return to dashboard
     */
    set: (state, action) => {
      const { container = DASHBOARD, params = {} } = action.payload
      state.container = container
      state.params = params
    },
  },
})

export const { set } = mainContainerSlice.actions

export const selectCurrentContainer = (state) => state.container.container

export default mainContainerSlice.reducer
