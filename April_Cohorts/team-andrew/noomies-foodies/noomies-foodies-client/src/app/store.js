import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice'
import authReducer from '../features/authSlice'

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})