import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as actions from './actions'

axios.defaults.baseURL = 'https://644777c950c2533744257c4c.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// export const fetchUsers = () => async dispatch => {
//   dispatch(actions.fetchUsersRequest());
//   try {
//     const users = await axios.get('/users')
//     dispatch(actions.fetchUsersSuccess(users));
//   } 
//   catch (error) {
//     dispatch(actions.fetchUsersError(error));
//   }
// }

