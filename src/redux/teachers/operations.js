import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://learnlingo-33322-default-rtdb.firebaseio.com';

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/teachers.json');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
