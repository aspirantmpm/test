import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operations from 'redux/operations';
import { getUsers } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  console.log(users);
  useEffect(() => {
    dispatch(operations.fetchUsers());
  }, [dispatch]);

  

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ul>
        {/* {users.map(users => (
          <li users={users} key={users.id} />
        ))} */}
      </ul>
    </div>
  );
};
