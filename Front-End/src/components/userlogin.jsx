import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserLogin = () => {
  const [userRegistered, setUserRegistered] = useState(true);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("data in onSubmit:" + JSON.stringify(data));

    console.log("data in onSubmit:" + JSON.stringify(test));
    // POST request using axios inside useEffect React hook
    const article = { title: "React Hooks POST Request Example" };
    axios
      .post("http://localhost:8080/userprofile", data)
      .then(function (response) {
        console.log("response of post call: " + response.status);
        setUserRegistered();
      })
      .catch(function (error) {
        console.log("Error while calling post call: ");
      });
  };

  return (
    <React.Fragment>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group text-left">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              name="inputEmail"
              placeholder="Enter email"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              name="inputPassword"
              placeholder="Password"
              ref={register({
                required: "PASSWORD REQUIRED",
                minLength: { value: 8, message: "to short password" },
              })}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="inputConfirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="inputConfirmPassword"
              placeholder="Confirm Password"
              ref={register()}
            />
          </div>
          {errors.inputPassword && <p>{errors.inputPassword.message}</p>}

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default UserLogin;
