import { apiSlice } from "./apiSlice"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials
      }),
      transformResponse: async (response, meta) => {
        // Extract the value of the "Authorization" header from the response
        const token = meta.response.headers.get('Authorization')

        const data = await response;
        // Return an object containing the parsed response data and the token value
        return { data, token };
      }
    }),
    signup: builder.mutation({
      query: credentials => ({
        url: '/signup',
        method: 'POST',
        body: credentials
      }),
      transformResponse: async (response, meta) => {
        // Extract the value of the "Authorization" header from the response
        const token = meta.response.headers.get('Authorization')

        const data = await response;
        // Return an object containing the parsed response data and the token value
        return { data, token };
      }
    }),
  })
})

export const {
  useLoginMutation,
  useSignupMutation
} = authApiSlice