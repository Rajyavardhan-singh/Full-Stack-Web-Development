import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
export const UserView = () => {
  const users = useSelector((state) => state.user.data);
  const userError = useSelector((state) => state.user.error);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      <h1>List of Users</h1>
      <button onClick={clickHandler}>Get user List</button>
      {isLoading ? (
        <h2>Loading</h2>
      ) : users ? (
        <ol>
          {users.map((user) => {
            return <li style={{color:"black",backgroundColor:"white", margin:"10px" , borderRadius:"5px"}} key={user.id}><h3>name : {user.name}</h3><p>email :{user.email}</p></li>;
          })}
        </ol>
      ) : userError ? (
        <h2>{userError}</h2>
      ) : null }
    </>
  );
};
