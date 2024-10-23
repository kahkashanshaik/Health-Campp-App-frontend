import { protectedApi } from "../../apiService";
import {transformErrorRes} from "../../utils/errorResponse";
const VolunteerAuthApi = protectedApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: '/volunteer/login',
                method: 'POST',
                body: { email, password }
            }),
            transformErrorResponse: (response, meta, arg) => {
                return transformErrorRes(response);
            }
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/volunteer/logout',
                method: 'POST'
            })
        }),
    })
});

export const {useLogoutMutation, useLoginMutation } = VolunteerAuthApi;