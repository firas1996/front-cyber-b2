import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = async () => {
    // const res = await axios.post("http://127.0.0.1:1234/users/login", {
    //   email: userData.email,
    //   password: userData.password,
    // });
    const res = await axios.get("http://localhost:1234/users");
    console.log(res.data);
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <label>Email</label>
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={inputChangeHandler}
        value={userData.email}
      />
      <label>Password</label>
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={inputChangeHandler}
        value={userData.password}
      />
      <button onClick={loginHandler}>login</button>
    </div>
  );
};

export default Login;
