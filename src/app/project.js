import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    list: new Map(),
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
  state.project.list.get(state.current)
export const selectCurrentProjectID = (state) => state.project.current

export default projectSlice.reducer
