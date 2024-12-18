import React, { useContext } from "react";
import registerAnimation from '../assets/Lottie/register.json'
import Lottie from "lottie-react";
import { AuthContext } from "../AuthFiles/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import SocialLogin from "../Shared/SocialLogin";
const Register = () => {
  const {register,setErrorMsg,errorMsg}=useContext(AuthContext)
  const handleRegister=e=>{
    e.preventDefault()
    setErrorMsg('')
    const form=e.target
    const name=form.name.value
    const photo=form.photo.value
    const email=form.email.value
    const pass=form.pass.value
    const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){8,}.+$/
  
    if(!regex.test(pass)){
      setErrorMsg("Password is not validated properly! Try again")
      return
    }
    register(email,pass)
    .then(result=>{
      e.target.reset()
      signOut(auth)
    })
    .catch(error=>setErrorMsg(error.message))
  }
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left w-30 lg:w-96">
            <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <h1 className="text-error font-bold">{errorMsg}</h1>
        <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 class="m-5 text-3xl font-bold">Register now!</h1>
          <form class="card-body" onSubmit={handleRegister}>
          <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name='photo'
                placeholder="Your Image Link"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control mt-6">
              <input type="submit" value="Register" className="btn btn-primary" />
            </div>
          </form>
          <div className="text-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
