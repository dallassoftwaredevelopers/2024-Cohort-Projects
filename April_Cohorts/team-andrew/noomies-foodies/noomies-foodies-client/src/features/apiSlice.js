// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from './authSlice'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("Authorization", token)
      }
      return headers
    }
  }),
  tagTypes: ['Recipes'],
  endpoints: (builder) => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints