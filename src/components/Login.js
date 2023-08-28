import React,{useState} from "react";
import './Header.css'
import {Link} from 'react-router-dom'
import google from '../Asssets/google.webp'
import twiter from '../Asssets/twitter.avif'
import  github from '../Asssets/GitHub-logo.png'
import facebook from '../Asssets/facebook.png'


export default function Login() {
  const[email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleEmail = (e) =>{
     setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
     setPassword(e.target.value)
  }
  const  showData = () =>{
      console.log("email:",email)
      console.log("Password:",password)
  }
  return (
    <div className="LoginContainer">
      <form>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control"
            value={email} onChange={handleEmail}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control"
             value={password} onChange={handlePassword}
             autoComplete="new-password"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"

              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4"
           onClick={showData}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member?
            <Link to="/Registration"> Register</Link>

          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f">
            <img src={facebook} alt="facebook" width={'30px'} height={"30px"}/>
            </i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google">
            <img src={google} alt="google" width={'30px'} height={"30px"}/>
            </i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter">
            <img src={twiter} alt="twiter" width={'30px'} height={"30px"}/>
            </i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github">
            <img src={github} alt="github" width={'30px'} height={"30px"}/>
            </i>
          </button>
        </div>
      </form>
    </div>
  );
}
