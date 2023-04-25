import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { fetchUsers } from './operations'
// import * as actions from './actions';

const entities = createReducer([], {
    [fetchUsers.fulfilled]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
  [fetchUsers.pending]: () => true,
  [fetchUsers.fulfilled]: () => false,
  [fetchUsers.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchUsers.fulfilled]: (_, action) => action.payload,
  [fetchUsers.rejected]: () => null,
});

export default combineReducers({
    entities, isLoading, error
})