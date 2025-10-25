import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
});

export default slice.reducer;
