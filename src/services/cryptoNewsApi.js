import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
  }

const baseUrl = process.env.REACT_APP_NEWS_API_URL 

const createRequest = (url) => ({url, headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory }) => createRequest(`/search/news?term=${newsCategory}&region=wt-wt&safeSearch=off&textFormat=Raw&freshness=Day`),
        })
    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi