import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h3>
        Invalid URL ! <Link to={"/login"} >Login</Link>
      </h3>
    </div>
  );
}

export default ErrorPage;
