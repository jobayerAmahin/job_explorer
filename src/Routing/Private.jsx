import React, { useContext } from 'react';
import { AuthContext } from '../AuthFiles/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loadState}=useContext(AuthContext)
    const location=useLocation()
    
    if(user){
        return children
    }
    if(loadState){
        return <span class="loading loading-ring loading-lg font-bold"></span>
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default Private;