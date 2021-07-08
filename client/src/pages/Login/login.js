import React from "react";
import LoginForm from "../../components/LoginForm/loginForm";

import { CookiesProvider } from "react-cookie";

function Login(props) {
  return (
    <CookiesProvider>
      <div className="Login">
        <LoginForm updateCookies={props.updateCookies} />
      </div>
    </CookiesProvider>
  );
}

export default Login;
