import appApi from "../apiService";

const campaignsApi = appApi.injectEndpoints({
    endpoints: (builder) => ({
        listCampaigns: builder.query({
            query: ({filters}) => ({
                url: '/campaigns',
                params: filters
            }),
            transformResponse: (response, meta, arg) => response.data
        }),
        singleCampaign: builder.query({
            query: ({id}) => ({
                url: `/campaign/${id}`
            }),
            transformResponse: (response, meta, arg) => response.data
        }) 
    })
})

export const { useListCampaignsQuery, useSingleCampaignQuery } = campaignsApi;