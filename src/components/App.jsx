import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operations from 'redux/operations';
import { getUsers } from 'redux/selectors';
import {UserCard } from './userCard'

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  console.log(users);
  useEffect(() => {
    dispatch(operations.fetchUsers());
  }, [dispatch]);

  

  return (
   <UserCard/>
  );
};
