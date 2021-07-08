import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./loginForm.css";
import API from "../../utils/API";
import Cookies from "js-cookie";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    API.getUser(payload).then((response) => {
      let userCookie;
      if (response.status == 200) {
        userCookie = {
          id: response.data.id,
          name: response.data.username,
          logged_in: true,
        };
      }
      let cookie = Cookies.set("user", JSON.stringify(userCookie));
      props.updateCookies(cookie);
    });
  };

  return (
    <div className="login">
      <Form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <Button variant="primary" type="submit" onClick={handleSubmitClick}>
          Submit
        </Button>
      </Form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      ></div>
      <div className="signupMessage">
        <span>Don't have an account? </span>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
