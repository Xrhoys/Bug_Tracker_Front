import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './project'
import userReducer from './user'
import containerReducer from './containerController'

export default configureStore({
  reducer: {
    project: projectReducer,
    user: userReducer,
    container: containerReducer,
  },
})
