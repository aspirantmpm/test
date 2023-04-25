// import { createSlice } from '@reduxjs/toolkit';
// import { fetchUsers } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const usersSlice = createSlice({
//   name: 'users',
//   initialState: { items: [], isLoading: false, error: null },

//   extraReducers: {
//     [fetchUsers.pending]: handlePending,
//     [fetchUsers.rejected]: handleRejected,

//     [fetchUsers.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },

    
//   },
// });

// export const usersReducer = usersSlice.reducer;
