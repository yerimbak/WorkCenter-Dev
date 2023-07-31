import {createSlice} from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    id: undefined,
    isLogin: false
  },
  reducers: {
    login(state /*, action*/) {
      state.id = 'test'
      state.isLogin = true
      return state
    },
    logout(state) {
      state.id = undefined
      state.isLogin = false
      return state
    }
  }
})

export const {login, logout} = user.actions
export default user.reducer
