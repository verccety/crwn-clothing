import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signInSuccess(state, action) {
      state.currentUser = action.payload;
      state.error = null;
    },
    signOutSuccess(state) {
      state.error = null;
      state.currentUser = null;
    },
    signInFailure(state, action) {
      state.error = action.payload;
    },
    signOutFailure(state, action) {
      state.error = action.payload;
    },
    signUpFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  signInSuccess,
  signOutSuccess,
  signInFailure,
  signOutFailure,
  signUpFailure,
} = userSlice.actions;
export default userSlice.reducer;
