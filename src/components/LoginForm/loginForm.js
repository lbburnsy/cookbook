import React from "react";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button';
import "./loginForm.css"

function LoginForm() {
    return(
        <div className="Login">
    <Form>
  <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="Username" placeholder="Enter Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="primary" size="sm">
    Log In
  </Button>
  <Form.Group>
        Dont have an account? <a href="#Sign up">Sign Up</a>
      </Form.Group>
</Form>
</div>
    );
}

export default LoginForm