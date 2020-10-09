import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './project'
import userReducer from './user'

export default configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
  },
})
