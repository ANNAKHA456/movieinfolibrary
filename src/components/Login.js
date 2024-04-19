import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    console.log('User moving to home');
    navigate("/home");
  };
  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Login;
