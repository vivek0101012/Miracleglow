/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";

import { useState } from "react"
export default function  Navbar(){
const [isopen,setopen]=useState(false);
    return <div className=" flex flex-col">
    <div className="bg-white flex flex-row justify-around items-center  w-full mt-4 ">
<Link to={"/"}>    <div className=" flex items-center justify-start  space-x-4 ">

<img src="/images/logo.png" width={25} alt="" />
<h1 className="  md:text-2xl font-bold font-pacifico  text-[#BA7894] ">MIRACLE GLOW </h1>


    </div></Link>



<div className=" hidden md:flex  space-x-14   items-center justify-end">   <div className=" flex items-center  font-manrope  text-sm space-x-12 ">
<Link to={"/"}><div className="active:scale-90 "> HOME </div></Link>

<a href="#contact"><div className="active:scale-90 " >CONTACT  </div></a>

<Link to={"/aboutus"}> <div className="active:scale-90 " > ABOUT US </div> </Link>


    </div>
    
    
    <div className=" flex  items-center space-x-6 text-sm "> <button className=" border rounded active:scale-90 border-stone-950  font-bold  px-3 py-1  "> LOGIN </button>
    <button className="text-white active:scale-90 font-bold text-center bg-black px-3 py-1.5 rounded  ">SIGNUP</button>
   <Link to={"/cart"}> <img src="/images/addtocart.png" className="object-contain active:scale-90 " width={32}></img></Link>
     </div>
  
    </div>
<div className="block md:hidden ">

    <div className=" flex items-center justify-end"
         onClick={() =>setopen(!isopen)}
    
    >


        { isopen? 
          
            <img src="/images/close.png " className="active:scale-95" width={25} alt="" /> 
        :
          <img src="/images/hamburger.png " className="active:scale-95" width={25} alt="" /> 

        }


    </div>

</div>


 
    
    
    </div> 
    
    <div> {isopen && <Menu></Menu>} </div>
    
    </div>
    
    
}

export function Menu(){
return <div  className=" transition-transform scroll-smooth flex flex-col items-center mt-4 m-2 p-2  shadow-lg space-y-2 rounded border-gray-600 ">

<Link to={"/"}><div className="active:scale-90 "> HOME </div></Link>

<a href="#contact"><div className="active:scale-90 " >CONTACT  </div></a>

<Link to={"/aboutus"}> <div className="active:scale-90 " > ABOUT US </div> </Link>
    
<button className=" w-[72%] border rounded active:scale-90 border-stone-950  font-bold  px-2 py-1  "> LOGIN </button>
    <button className="w-[72%] text-white active:scale-90 font-bold text-center bg-black px-2 py-1.5 rounded  ">SIGNUP</button> 
    <Link to={"/cart"}> <img src="/images/addtocart.png" className="object-contain active:scale-90 " width={32}></img></Link>

</div>

}