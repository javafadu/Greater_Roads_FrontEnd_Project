import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { getUser } from "./api/user-service";
import CustomRoutes from "./router/custom-routes";
import { loginFailed, loginSuccess } from "./store/slices/auth-slice";

const App = () => {
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const token = secureLocalStorage.getItem("token");
      console.log(token);
      if (token) {
        const resp = await getUser();
        dispatch(loginSuccess(resp.data));
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailed());
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <CustomRoutes />
    </>
  );
};

export default App;
