import React, { useContext } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { AuthContext } from '../AuthFiles/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn,setUser}=useContext(AuthContext)
    const handleGoogleSign=()=>{
        googleSignIn()
        .then(result=>setUser(result.user))
        .catch(error=>setErrorMsg(error.message))
    }
    return (
        <div>
              <div class="divider">OR</div>
              <button className='btn' onClick={handleGoogleSign}>Sign in by Google <BsGoogle />
              </button>
        </div>
    );
};

export default SocialLogin;