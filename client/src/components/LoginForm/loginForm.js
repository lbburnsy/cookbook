import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import API from "../../utils/API";
import "./loginForm.css"

function LoginForm(props) {
  const [state , setState] = useState({
      email : "",
      password : "",
      successMessage: null
  })
  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }

  const handleSubmitClick = (e) => {
      e.preventDefault();
      const payload={
          "email":state.email,
          "password":state.password,
      }

     API.Login(payload)
        .then(response =>{ console.log(response.data); props.setUserInfo(
            {userid:response.data._id, 
                email: response.data.email,
            username:  response.data.username,
            password:  response.data.password,
            abilityLevel:  response.data.abilityLevel}) 
            document.getElementById("errorItem").className="alert alert-warning";

        })
          
        
    //   axios.post(API_BASE_URL+'/user/login', payload)
    //       .then(function (response) {
    //           if(response.status === 200){
    //               setState(prevState => ({
    //                   ...prevState,
    //                   'successMessage' : 'Login successful. Redirecting to home page..'
    //               }))
    //               localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
    //               redirectToHome();
    //             //   props.showError(null)
    //           }
    //           else if(response.code === 204){
    //             //   props.showError("Username and password do not match");
    //           }
    //           else{
    //             //   props.showError("Username does not exists");
    //           }
    //       })
          .catch(function (error) {
              console.log(error);
          });
  }

//   const redirectToHome = () => {
//     //   props.updateTitle('Home')
//     //   props.history.push('/home');
//   }

  return(
    <div className="container-fluid hero  bk-board d-flex" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL
            + "/assets/pexels-ray-piedra-1565982.jpg"})`
      }}  >
    <div className="login">
    <div id="errorItem"  class="alert alert-warning d-none mb-3">
         Username or password is incorrect
        </div>
         <Form>
            <div className="l-word">
             <h2>Login</h2>
           </div>   
             
             <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" 
                     className="form-control" 
                     id="email" 
                     aria-describedby="emailHelp" 
                     placeholder="Enter email" 
                     value={state.email}
                     onChange={handleChange}
              />
              <small id="emailHelp" className="security-message">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" 
                     className="form-control" 
                     id="password" 
                     placeholder="Password"
                     value={state.password}
                     onChange={handleChange} 
              />
              </div>
              <div className="form-check">
              </div>
              <Button className= "sub-btn" variant="warning" type="submit" onClick={handleSubmitClick}>
                  Login
              </Button>
          </Form>
          <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
              {state.successMessage}
          </div>
          <div className="signupMessage">
              <span>Dont have an account? </span>
              <Link className="options-message m-2" to="/signup">Signup</Link>
 
          </div>
      </div>
    </div>
  )
}

export default withRouter(LoginForm);