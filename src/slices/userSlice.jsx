
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // value: null

    value: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  },
  reducers: {
    loginInfo: (state, action) => {
      state.value = action.payload
      console.log(state.value);
    },
  }
})

// Action creators are generated for each case reducer function
export const { loginInfo } = userSlice.actions

export default userSlice.reducer