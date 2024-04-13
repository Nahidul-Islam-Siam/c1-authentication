import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider , GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user , setUser] = useState(null)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()      
const registerUser = (email, password) =>{
return createUserWithEmailAndPassword(auth,email,password)

    }

 

    const loginUser = (email, password) =>{
    return    signInWithEmailAndPassword(auth,email,password)
      
            }
  
const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
}

const facebookLogin =()=>{
    return signInWithPopup(auth,facebookProvider)
}

const logOut = ()=>{
    return signOut(auth)
}

    const authInfo ={
        registerUser,
        loginUser,
        user,
        logOut,
        setUser,
        googleLogin
    }


    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user


              console.log(currentUser);
             
            } else {
              // User is signed out
              // ...
            }
          });
          
    },[])
    return (
        <div>
          <AuthContext.Provider value={authInfo}>
          {children}
          </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;