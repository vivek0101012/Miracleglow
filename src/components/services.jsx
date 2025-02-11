/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";
export default function Services (){
  const { cart, addtocart } = useContext(Cartcontext);

    const services = [
  {
    image: "https://i.ibb.co/v6pg41HW/facial.jpg",
    title: "Glow Facial",
    detail: "Deep cleansing for radiant skin",
    price: 1299,
  },
  {
    image: "https://i.ibb.co/6Jc5tydq/haircut.jpg",
    title: "Haircut & Styling",
    detail: "Trendy cuts for a fresh look",
    price: 799,
  },
  {
    image: "https://i.ibb.co/X6jqRvT/manicure.jpg",
    title: "Manicure & Pedicure",
    detail: "Nourish your hands and feet",
    price: 1099,
  },
  {
    image: "https://i.ibb.co/B5kdmBYS/makeup.jpg",
    title: "Bridal Makeup",
    detail: "Flawless beauty for your big day",
    price: 4999,
  },
  {
    image: "https://i.ibb.co/zTL94NhG/hairspa.jpg",
    title: "Hair Spa",
    detail: "Repair and nourish damaged hair",
    price: 1199,
  },
  {
    image: "https://i.ibb.co/JRDfFfWK/threading.jpg",
    title: "Eyebrow Threading",
    detail: "Perfectly shaped brows instantly",
    price: 199,
  },
];

const Bestseller = [
  {
    image: "https://i.ibb.co/v6pg41HW/facial.jpg",
    title: "Glow Facial",
    detail: "Deep cleansing for radiant skin",
    price: 1299,
  },
  {
    image: "https://i.ibb.co/6Jc5tydq/haircut.jpg",
    title: "Haircut & Styling",
    detail: "Trendy cuts for a fresh look",
    price: 799,
  },
  {
    image: "https://i.ibb.co/X6jqRvT/manicure.jpg",
    title: "Manicure & Pedicure",
    detail: "Nourish your hands and feet",
    price: 1099,
  },
  {
    image: "https://i.ibb.co/JRDfFfWK/threading.jpg",
    title: "Eyebrow Threading",
    detail: "Perfectly shaped brows instantly",
    price: 199,
  },
];

    
return <div className="py-16 font-playfair">
  <h2 className=" text-center text-lg  font-semibold text-[#BA7894] ">OUR SERVICES  </h2>

<h1 className="mt-2 text-center text-3xl font-bold text-[#422A3C]">Recommended</h1>
<div className=" flex flex-row overflow-auto gap-8  px-6 py-4 scrollbar-hide ">
{
    services.map((e,index)=>(



<Card services={e} key={index} ></Card>




      
    ))
}



</div>


<h1 className="mt-2 text-center text-3xl font-bold text-[#422A3C]">Best Sellers </h1>

<div className="  flex flex-row  md:justify-center overflow-auto gap-8  px-6 py-4 scrollbar-hide ">
{
    Bestseller.map((e,index)=>(
      <Card services={e} key={index} ></Card>
    ))
}



</div>

</div>



}



export function Card({services}){
  const { cart, addtocart } = useContext(Cartcontext);
  const { image, title, detail, price } = services;
 return <div className="  rounded-md h-[360px] min-w-[240px] flex flex-col shadow-lg py-2  space-y-2   " >


     <img src={image} className="h-40 w-full rounded-t-xl" alt="" />


     <div className="flex flex-col  px-4 py-2 flex-grow ">
     <h1 className="font-bold text-lg truncate"> {title}</h1>
     <h1 className=" text-sm truncate"> {detail}</h1>

     <div className="flex justify-start   items-center w-full   space-x-4 mt-4">

     <h1 className="font-bold text-lg truncate">Price</h1> <h1 className="font-bold text-lg font-serif text-center truncate text-[#a66d85]"> ₹{price}</h1>

     </div>

   
     <div className="flex   items-center w-full px-0   space-x-4 mt-4">
<button className="rounded-md text-nowrap px-4 py-2 text-white font-semibold 
        bg-[#BA7894] text-center shadow-md hover:bg-[#a66d85] transition-all 
        duration-300 ease-in-out transform hover:scale-105">
  BOOK NOW
</button>

        <img src="/images/addtocart.png " 
   onClick={()=>{ console.log(cart);
    
 
    addtocart(services) }}
        className="object-contain  active:scale-90" width={36}></img>
     </div>
       
    

    </div>
 


        </div>
}