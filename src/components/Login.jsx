import React from "react";

const Login = () => {
  return (
    <div>
      <label>Email</label>
      <input placeholder="Email" type="email" />
      <label>Password</label>
      <input placeholder="Password" type="password" />
      <button>login</button>
    </div>
  );
};

export default Login;
