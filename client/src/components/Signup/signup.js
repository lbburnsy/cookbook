import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signup.css";
import { Redirect, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function Signup() {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    abilityLevel: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = async () => {
    if (state.email.length && state.username && state.password.length) {
      // props.showError(null);
      const payload = {
        email: state.email,
        username: state.username,
        password: state.password,
        abilityLevel: state.abilityLevel,
      };
      API.createUser(payload);
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      // props.showError('Passwords do not match');
    }
<<<<<<< HEAD
  };
  return (
    <div className="signup">
      <Form>
        <div className="form-group text-left">
=======

    const redirectToHome = () => {
      // props.updateTitle('Home')
      // props.history.push('/home');
  }

    
    const handleSubmitClick = (e) => {
      e.preventDefault();
      if(state.password === state.confirmPassword) {
          sendDetailsToServer()    
      } else {
          // props.showError('Passwords do not match');
      }
  }
    return(
        <div className="container-fluid hero d-flex" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL
                + "/assets/pexels-ray-piedra-1565982.jpg"})`
          }}  >
        <div className="signup">
  <Form>
      <div className="form-group text-left">
>>>>>>> main
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
          <label htmlFor="exampleInputUsername">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="passwordHelp"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <small id="passwordHelp" className="form-text text-muted">
            Password must be 8 characters long.
          </small>
        </div>

        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </div>

        <Form.Group>
          <label htmlFor="exampleInputPassword1">
            Select Your Ability Level
          </label>
          <Form.Control
            as="select"
            id="abilityLevel"
            value={state.abilityLevel}
            onChange={handleChange}
          >
            <option></option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Professional</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmitClick}>
          Submit
        </Button>
      </Form>

      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
=======
      </div>



      <Form.Group>
        
        <Form.Control as="select">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Professional</option>
        </Form.Control>
      </Form.Group>
      

  <Button variant="warning" type="submit" onClick={handleSubmitClick}>
    Submit
  </Button>


  </Form>

  <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
 
            </div>

    <br/> 
    



        </div>
    </div>
>>>>>>> main

      <br />
    </div>
  );
}

export default withRouter(Signup);
