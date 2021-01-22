import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState: INITIAL_STATE,
  reducers: {
    fetchCollectionsStart(state) {
      state.isFetching = true;
    },
    fetchCollectionsSuccess(state, action) {
      state.isFetching = false;
      state.collections = action.payload;
    },
    fetchCollectionsFailure(state, action) {
      state.isFetching = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} = shopSlice.actions;
export default shopSlice.reducer;
