/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";


const testimonials = [
  {
      image: "/images/person1.png",
      name: "Ananya Sharma",
      review: "The staff is professional and well-trained. They know what they are doing, and they make sure every client is treated with care. I was impressed by their efficiency and the way they handled everything seamlessly."
  },
  {
      image: "/images/person2.png",
      name: "Priya Kapoor",
      review: "Clean and well-organized salon. The service was quick and efficient, and I appreciated how the staff maintained hygiene throughout the process. It’s clear they take customer satisfaction seriously."
  },
  {
      image: "/images/person3.png",
      name: "Riya Mehta",
      review: "They listen to what you want and deliver exactly that. No unnecessary upselling, just honest and quality service. I felt truly heard, and the results were exactly what I envisioned. Highly recommend!"
  },
  {
      image: "/images/person4.png",
      name: "Neha Verma",
      review: "A good place with skilled professionals. The team is polite and focused, making sure you are comfortable at all times. Their expertise is evident in the way they handle every service with precision."
  },
  {
      image: "/images/person5.png",
      name: "Sanya Malhotra",
      review: "Well-maintained space with a calm environment. Everything runs smoothly from the moment you step in. The ambiance is relaxing, and the staff makes sure you have a pleasant experience every time."
  },
  {
      image: "/images/person6.png",
      name: "Kavya Agarwal",
      review: "They pay attention to detail and ensure everything is done properly. From start to finish, the experience was seamless, and they made sure I was completely satisfied with the service provided."
  },
  {
      image: "/images/person7.png",
      name: "Simran Kaur",
      review: "Friendly staff, good service, and a well-structured approach. They make sure to personalize the service according to your needs, making you feel valued and taken care of throughout the session."
  },
  {
      image: "/images/person8.png",
      name: "Pooja Iyer",
      review: "A professional team that respects time and provides efficient service. I never had to wait long, and the process was handled smoothly, ensuring a comfortable and stress-free experience for me."
  }
];

export default function Testimonials(){



      const [value,setvalue]=useState(0);
      const [isActive,setactive]=useState(false)
      const [isActive2,setactive2]=useState(false)

return <div className=" bg-gray-50 flex flex-col items-center justify-center font-playfair ">



<h2 className=" text-center text-lg  font-semibold text-[#BA7894] ">TESTIMONIALS </h2>

<h1 className="text-center md:text-3xl text-2xl   text-black font-semibold ">What our Customers says..</h1>
    
<div className="py-16 mt-[-42px] shadow-lg text-ellipsis w-full flex items-center justify-center">
<div className=" flex md:flex-row  flex-col p-4 gap-4 md:w-8/12  w-11/12 md:bg-[url('/images/image.png')] items-center  justify-center  md:min-h-[480px] h-[340px] bg-[#422A3C] rounded-3xl bg-cover
">


  <img src="/images/user.png" className="md:w-48 h-24 md:h-48 border rounded-full border-lg w-24" alt="" />




<div className="md:w-[72%]   ">
<h2 className=" text-center md:text-3xl text-lg   font-semibold text-[#BA7894] ">{testimonials[value].name} </h2>

<h1 className="mt-2 text-center  md:text-xl text-sm md:text-wrap  text-clip  text-[#F7E5C1]   ">{testimonials[value].review}</h1>

</div>


</div>



</div>



<div className=" flex flex-row justify-center mt-[-50px] items-center space-x-4 ">


<img src="/images/forward.png" className= {` ${isActive ? " bg-gray-600 " : "bg-[#422A3C]"}  rotate-180 flex  p-2  items-center justify-center rounded-full active:scale-90 `} width={36} alt=""  onClick={()=>{if(value>0){setvalue(value-1); setactive(true) ; setactive2(false)}
else {setvalue(0);}
}} />
<img src="/images/forward.png "  className= {` ${isActive2 ? " bg-gray-600 " : "bg-[#422A3C]"}  text-white flex p-2 font-thin rounded-full items-center justify-center active:scale-90 `} width={36} alt=""onClick={()=>{if(value<testimonials.length-1){setvalue(value+1);}
else {setvalue(0);}
setactive2(true) ; setactive(false)
}}  />


</div>




</div>      






}

