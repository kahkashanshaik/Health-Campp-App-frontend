import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithoutAuth, { baseQueryWithAuth } from "../store/apiConfig";

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: baseQueryWithoutAuth,
    endpoints: () => ({})
})


export const protectedApi = createApi({
    reducerPath: 'protectedApi',
    baseQuery: baseQueryWithAuth,
    endpoints: () => ({})
})

export default appApi;

