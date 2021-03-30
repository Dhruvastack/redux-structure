import React, { useEffect } from "react";
import { getUsers } from "../Users/actions";
import { useDispatch, useSelector } from "react-redux";

export const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log("Users", getUsers());
  }, []);
  const users = useSelector((state) => state?.usersReducer?.users);
  console.log("users>>>>>>>>>", users);
  return (
    <>
      <div>
        {users?.data?.map((user) => (
          <h1>{user?.first_name}</h1>
        ))}
      </div>
    </>
  );
};
