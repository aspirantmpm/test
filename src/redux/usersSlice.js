import { createSlice } from '@reduxjs/toolkit';

// const initialState = { value: 0 };

const usersSlice = createSlice({
  name: 'users',
  initialState: {entities: [], isLoading: false, error: null,},
  extraReducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = usersSlice.actions;
export default usersSlice.reducer;
