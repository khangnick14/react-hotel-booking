import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogIn = ({ data }) => {
  const navigate = useNavigate();
  const [logIn, setLogIn] = useState({
    username: "",
    password: "",
  });

  const [errors, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setLogIn({ ...logIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validation(logIn));
    if (success) {
      navigate("/admin-update-basic");
    }
  };

  const validation = (values) => {
    let errors = {};
    if (!values.username) {
      errors.name = "Username Required";
    } else if (!values.password) {
      errors.password = "Password Required";
    } else if (values.name !== "admin" && values.password !== "123") {
      errors.name = "Incorrect username/password";
    }
    return errors;
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      logIn.username === "admin" &&
      (logIn.password = "123")
    ) {
      setSuccess(true);
    }
  }, [errors, logIn]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src={data.photo.view6}
          alt="/"
        />
      </div>

      <div className="bg-gray-900/10 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-2xl"
        >
          <h2 className="text-4xl, text-white font-bold text-center">
            ADMIN SIGN IN
          </h2>
          <div className="flex flex-col  mb-3">
            <label className="mb-1 text-gray-400">Username</label>
            <input
              name="username"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="text"
              id="username"
              onChange={handleChange}
              value={logIn.username}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-1 text-gray-400">Password</label>
            <input
              name="password"
              className="p-2 rounded-lg focus:border-[var(--dark-primary)] focus:bg-gray-300 focus:outline-none "
              type="password"
              id="password"
              onChange={handleChange}
              value={logIn.password}
            />
            {errors.name && (
              <p className="text-red-600 text-mm mt-2">{errors.password}</p>
            )}
          </div>
          <button className="w-full my-5 py-2">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogIn;
