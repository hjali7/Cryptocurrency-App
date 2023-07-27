import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b2b5c4d306mshb001c31dd76dd57p1b4b55jsnd4c0a591a909',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const createRequest = url => ({url , headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi