import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { logout, toggleSpinner } from './appConfigSlice';

// This is the base query that will be used to make all the requests to the API.
export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }) => {
      const {token: accessToken} = getState().appConfig;
      if (accessToken) {
          headers.set("authorization", `Bearer ${accessToken}`);
      }
      // headers.set("Content-Type", "application/json");
      // return headers;
  },
  // credentials: "include",
});

/**
 * usage: fetch wrapper for api calls without auth
 * @param {*} args 
 * @param {*} api 
 * @param {*} extraOptions 
 * @returns  
 */
export const baseQueryWithoutAuth = async (args, api, extraOptions) => {
    api.dispatch(toggleSpinner(true));
    let result = await baseQuery(args, api, extraOptions);
    api.dispatch(toggleSpinner(false));
    return result;
}
/**
 * usage: fetch wrapper for api calls with auth
 * @param {*} args 
 * @param {*} api 
 * @param {*} extraOptions 
 * @returns  
 */
export const baseQueryWithAuth = async (args, api, extraOptions) => {
  api.dispatch(toggleSpinner(true));
  let result = await baseQuery(args, api, extraOptions);
  if (result.status === 401) {
      api.dispatch(logout());
  }
  api.dispatch(toggleSpinner(false));
  return result;
}

export default baseQueryWithoutAuth;

