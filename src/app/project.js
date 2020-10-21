import { createSlice } from '@reduxjs/toolkit'

const defaultProject = {
  title: 'Default',
  logoURL:
    'https://moonlamarque.fr/wp-content/uploads/2017/06/shopkeeper-logo.png',
}
export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    list: [
      {
        id: '1',
        name: 'Default project',
      },
      {
        id: '1',
        name: 'Default project',
      },
      {
        id: '1',
        name: 'Default project',
      },
      {
        id: '1',
        name: 'Default project',
      },
      {
        id: '1',
        name: 'Default project',
      },
      {
        id: '1',
        name: 'Default project',
      },
    ],
    current: '',
  },
  reducers: {
    add: (state, action) => {
      const { project } = action.payload

      let newMap = new Map(state.list)
      newMap.set(project.id, project)
      return { ...state.list, list: newMap }
    },
    remove: (state, action) => {
      const { projectID } = action.payload

      let newMap = new Map(state.list)
      newMap.delete(projectID)
      return { ...state.list, list: newMap }
    },
    setCurrent: (state, action) => {
      const { projectID } = action.payload
      state.list.has(projectID) && (state.current = projectID)
    },
  },
})

export const { add, remove, setCurrent } = projectSlice.actions

export const createNewProject = (project) => async (dispatch) => {
  //TODO: Backend call in async
  //TODO: use `add` function to add to local record
}

export const removeProject = (project) => async (dispatch) => {
  //TODO: Backend call in async
  //TODO: use `remove` function to remove from local record
}

// Selectors
export const selectProjectList = (state) => state.project.list
export const selectProject = (state, id) => state.project.list.get(id)
export const selectCurrentProject = (state) =>
  defaultProject ?? state.project.list.get(state.current)

export default projectSlice.reducer
