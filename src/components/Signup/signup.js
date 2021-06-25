import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import "./signup.css"

function Signup() {
    return(
        <div className="signup">
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="Username" placeholder="Enter Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-muted">
     Password must be 8 characters 
    </Form.Text>
  </Form.Group>

  <Form.Group>
        
  <Form.Control as="select">
    <option>Beginner</option>
    <option>Intermediate</option>
    <option>Advanced</option>
    <option>Professional</option>
  </Form.Control>
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>

  </Form>
    
    <br/>
    
   



        </div>

    )
}



export default Signup;

// create a function same name as folder 