import React, { useEffect, useState } from "react";
import { createLogin } from "../Auth/actions";

import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  console.log("handle", login);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLogin(login));
    console.log("handle>>>", login);
  };

  return (
    <>
      <h2 className="text-uppercase text-center"> Log in</h2>
      <form id="login" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            {" "}
            Email<span className="req">*</span>{" "}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            data-validation-required-message="Please enter your email address."
            autoComplete="off"
            value={login.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            {" "}
            Password<span className="req">*</span>{" "}
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            data-validation-required-message="Please enter your password"
            autoComplete="off"
            value={login.password}
            onChange={handleChange}
          />
        </div>

        <p className="float-right">Forgot Password?</p>
        <div className="mrgn-30-top">
          <button
            type="submit"
            className="btn btn-larger btn-primary  btn-block"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
};
