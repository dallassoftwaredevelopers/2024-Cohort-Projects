import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { data, token } = action.payload
      console.log(action.payload)
      state.user = data
      localStorage.setItem("token", token)
    },

    logOut: (state, action) => {
      state.user = null
      localStorage.removeItem("token")
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token