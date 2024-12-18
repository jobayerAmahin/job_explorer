import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthFiles/AuthProvider';
import loginAnimation from '../assets/Lottie/login.json'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
      const {setErrorMsg,errorMsg,signIn,setUser}=useContext(AuthContext)
      const location=useLocation()
      const navigate=useNavigate()
      const from=location.state||'/'
      const handleLogin=e=>{
        e.preventDefault()
        setErrorMsg('')
        const form=e.target

        const email=form.email.value
        const pass=form.pass.value

        signIn(email,pass)
        .then(result=>{
          setUser(result.user)
          e.target.reset()
          navigate(from)
        })
        .catch(error=>setErrorMsg(error.message))
      }
    return (
        <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left w-30 lg:w-96">
              <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <h1 className="text-error font-bold">{errorMsg}</h1>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 class="m-5 text-3xl font-bold">Login</h1>
            <form class="card-body" onSubmit={handleLogin}>

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
                <input type="submit" value="Login" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;