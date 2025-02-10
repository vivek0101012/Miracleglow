/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
 const Authcontext=React.createContext();
 export function Authprovide({children}){

const [currentuser,setcurrentuser]=useState(null);
const [userloggedin,setuserloggedin]=useState(false);
const [loading,setloading]=useState(true);

useEffect(()=>{

    const unsubscribe=onAuthStateChanged(auth,initializeUser);


},[])

async function initializeUser(user) {
    if(user){
        setcurrentuser({...user});
        setuserloggedin(true);
    }
    else {
        setcurrentuser(null);
        setuserloggedin(false);

    }
    setloading(false)
    
}
const value={
    currentuser,userloggedin,loading
}
return (
    <Authcontext.Provider
    value={value}
    >
{!loading && children}

    </Authcontext.Provider>
)

 }