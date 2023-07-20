import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "b2b5c4d306mshb001c31dd76dd57p1b4b55jsnd4c0a591a909",
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoinsList: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const {
    useGetCoinsListQuery
} = cryptoApi