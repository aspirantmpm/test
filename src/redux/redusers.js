import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from './actions';

const entities = createReducer([], {
    [actions.fetchUsersSuccess]: (_, action) => action.payload
});

const isLoading = createReducer(false, {
  [actions.fetchUsersRequest]: () => true,
  [actions.fetchUsersSuccess]: () => false,
  [actions.fetchUsersError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchUsersError]: (_, action) => action.payload,
  [actions.fetchUsersRequest]: () => null,
});

export default combineReducers({
    entities, isLoading, error
})