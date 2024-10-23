import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appConfigSlice from './appConfigSlice';
import appApi, { protectedApi } from '../services/apiService';

const rootReducer = combineReducers({
  appConfig: appConfigSlice,
  [appApi.reducerPath]: appApi.reducer, // Correct reducer for appApi
  [protectedApi.reducerPath]: protectedApi.reducer, // Correct reducer for protectedApi
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware, protectedApi.middleware),
});
