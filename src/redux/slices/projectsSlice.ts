import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Project {
  id: number
  title: string
  description: string
  image: string
  author: string
  location: string
}

interface ProjectsState {
  projects: Project[]
  loading: boolean
  error: string | null
  searchText: string
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
  searchText: '',
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fetchProjectsStart: state => {
      state.loading = true
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload
      state.loading = false
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
  },
})

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  setSearchText,
} = projectsSlice.actions

export const fetchProjects = (): any => async (dispatch: any) => {
  dispatch(fetchProjectsStart())

  try {
    function getURL() {
      if (window.location.protocol === 'https:') {
        return 'https://project-management-backend-production-f931.up.railway.app'
      } else {
        return 'http://localhost:3000'
      }
    }
    const baseURL = getURL()
    const response = await fetch(`${baseURL}/api/projects`)
    const data = await response.json()

    dispatch(fetchProjectsSuccess(data.data))
    // console.log(data)
  } catch (error: any) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    })
    dispatch(fetchProjectsFailure('Failed to fetch projects'))
  }
}

export default projectsSlice.reducer
