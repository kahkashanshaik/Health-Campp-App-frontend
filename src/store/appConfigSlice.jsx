import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  sidebarOpen: false,
  spinner: false,
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('access_token') || null,
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState: initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleSpinner: (state, { payload }) => {
      state.spinner = payload;
    },
    setAccessToken: (state, action) => {
      localStorage.setItem('access_token', action.payload);
      state.token = action.payload;
    },
    setUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      state.spinner = false;
    },
    syncUserSession: (state) => {
      // Syncing user state
      const user = localStorage.getItem('user');
      state.user = user ? JSON.parse(user) : null;
      // Syncing user token
      const accessToken = localStorage.getItem('access_token');
      state.token = accessToken ? accessToken : null;
    },
  },
});

export const { toggleSidebar, toggleSpinner, setUser, logout, syncUserSession, setAccessToken } = appConfigSlice.actions;

export default appConfigSlice.reducer;
