import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coingecko.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "b2b5c4d306mshb001c31dd76dd57p1b4b55jsnd4c0a591a909",
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
};

const createRequest = url => ({url , headers:headers})

export const cryptoExhangeApi = createApi({
  reducerPath: "cryptoExhangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptoExchangeQuery } = cryptoExhangeApi;