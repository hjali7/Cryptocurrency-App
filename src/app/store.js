import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoExhangeApi } from "../services/cryptoExchangeApi";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    [cryptoExhangeApi.reducerPath] : cryptoExhangeApi.reducer ,
  },
   middleware : getDefaultMiddleware => getDefaultMiddleware().concat(cryptoApi.middleware , cryptoNewsApi.middleware,cryptoExhangeApi.middleware),
});