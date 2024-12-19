import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  location: string;
}

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  searchText: string;
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
  searchText: '',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fetchProjectsStart: (state) => {
      state.loading = true;
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
      state.loading = false;
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  }
});

export const {
  fetchProjectsStart,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  setSearchText,
} = projectsSlice.actions;

export const fetchProjects = ():any => async (dispatch: any) => {
  dispatch(fetchProjectsStart());
  try {
  
const response = await axios.get('http://localhost:3000/api/projects/', {
  headers: {
    'Content-Security-Policy': "upgrade-insecure-requests"
  }
});
   
    const data = response.data
    dispatch(fetchProjectsSuccess(data));
  } catch (error) {
    dispatch(fetchProjectsFailure('Failed to fetch projects'));
  }
};

export default projectsSlice.reducer;
