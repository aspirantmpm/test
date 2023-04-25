import { createAction } from "@reduxjs/toolkit";

export const fetchUsersRequest = createAction('fetchUsersRequest');

export const fetchUsersSuccess = createAction('fetchUsersSuccess');

export const fetchUsersError = createAction('fetchUsersError');