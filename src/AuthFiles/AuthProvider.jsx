import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext=createContext(null)
const provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loadState,setLoadState]=useState(true)
    const [errorMsg,setErrorMsg]=useState(null)
    const register=(email,pass)=>{
        setLoadState(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    
    const signIn=(email,pass)=>{
        setLoadState(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const googleSignIn=()=>{
        setLoadState(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoadState(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const authData={
        register,
        setErrorMsg,
        errorMsg,
        signIn,
        setUser,
        googleSignIn,
        user,
        loadState
    }
    return (
        <div>
            <AuthContext.Provider value={authData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;