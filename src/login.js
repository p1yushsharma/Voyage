import React from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


const Login=()=>{
  const navigate=useNavigate();
   const onsignin=()=>{
    navigate("/home/")
   }
    return(
       <div className="container-fluid login">
       <form>
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
     
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  
  <button type="button" class="btn btn-primary btn-block mb-4" onClick={onsignin}>Sign in</button>

 
  <div class="text-center">
    <p>Not a member? <NavLink to='/Registeration'>Register</NavLink></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>
  </div>
</form>
</div>
    )
}
export default Login;