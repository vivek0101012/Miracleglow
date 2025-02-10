import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";
export default function Services (){
  const { cart, addtocart } = useContext(Cartcontext);

    const services = [
        {
          image: "/images/facial.png",
          title: "Glow Facial",
          detail: "Deep cleansing for radiant skin",
          price: 1299,
        },
        {
          image: "/images/haircut.png",
          title: "Haircut & Styling",
          detail: "Trendy cuts for a fresh look",
          price: 799,
        },
        {
          image: "/images/manicure.png",
          title: "Manicure & Pedicure",
          detail: "Nourish your hands and feet",
          price: 1099,
        },
        {
          image: "/images/waxing.png",
          title: "Full Body Wax",
          detail: "Smooth, silky skin guaranteed",
          price: 1499,
        },
        {
          image: "/images/makeup.png",
          title: "Bridal Makeup",
          detail: "Flawless beauty for your big day",
          price: 4999,
        },
        {
          image: "/images/hairspa.png",
          title: "Hair Spa",
          detail: "Repair and nourish damaged hair",
          price: 1199,
        },
        {
          image: "/images/threading.png",
          title: "Eyebrow Threading",
          detail: "Perfectly shaped brows instantly",
          price: 199,
        },
        {
          image: "/images/massage.png",
          title: "Aroma Therapy",
          detail: "Relax with a soothing massage",
          price: 1799,
        },
      ];const Bestseller = [
        {
          image: "/images/facial.png",
          title: "Glow Facial",
          detail: "Deep cleansing for radiant skin",
          price: 1299,
        },
        {
          image: "/images/haircut.png",
          title: "Haircut & Styling",
          detail: "Trendy cuts for a fresh look",
          price: 799,
        },
        {
          image: "/images/manicure.png",
          title: "Manicure & Pedicure",
          detail: "Nourish your hands and feet",
          price: 1099,
        },
        {
          image: "/images/waxing.png",
          title: "Full Body Wax",
          detail: "Smooth, silky skin guaranteed",
          price: 1499,
        },

      ];
    
return <div className="py-16 font-playfair">
  <h2 className=" text-center text-lg  font-semibold text-[#BA7894] ">OUR SERVICES  </h2>

<h1 className="mt-2 text-center text-3xl font-bold text-[#422A3C]">Recommended</h1>
<div className=" flex flex-row overflow-auto gap-8  px-6 py-4 scrollbar-hide ">
{
    services.map((e,index)=>(
        <div className="  rounded-md  flex flex-col shadow-lg py-2  space-y-2   " key={index}>


     <img src={e.image} className="h-40 w-full rounded-t-xl" alt="" />


     <div className="flex flex-col  px-4 py-2 space-y-2">
     <h1 className="font-bold text-nowrap"> {e.title}</h1>
     <h3>{e.detail}</h3>
     <h2 className="font-bold font-serif">₹{e.price}</h2>
      
<div className="flex  justify-center w-full px-4 py-6 space-x-3">
<button className="rounded-md text-nowrap px-4 py-2 text-white font-semibold 
        bg-[#BA7894] text-center shadow-md hover:bg-[#a66d85] transition-all 
        duration-300 ease-in-out transform hover:scale-105">
  BOOK NOW
</button>

        <img src="/images/addtocart.png " 
   onClick={()=>{ console.log(cart);
    
 
    addtocart(e) }}
        className="object-contain  active:scale-90" width={36}></img>
     </div>

   
       
    

    </div>


        </div>
    ))
}



</div>


<h1 className="mt-2 text-center text-3xl font-bold text-[#422A3C]">Best Sellers </h1>

<div className="  flex flex-row  md:justify-center overflow-auto gap-8  px-6 py-4 scrollbar-hide ">
{
    Bestseller.map((e,index)=>(
        <div className="  rounded-md flex flex-col shadow-lg py-2  space-y-2   " key={index}>


     <img src={e.image} className="h-40 w-full rounded-t-xl" alt="" />


     <div className="flex flex-col  px-4 py-2 space-y-2">
     <h1 className="font-bold text-nowrap"> {e.title}</h1>
     <h3>{e.detail}</h3>
     <h2 className="font-bold font-serif">₹{e.price}</h2>
      
<div className="flex  justify-center w-full px-4 py-6 space-x-3">
<button className="rounded-md text-nowrap px-4 py-2 text-white font-semibold 
        bg-[#BA7894] text-center shadow-md hover:bg-[#a66d85] transition-all 
        duration-300 ease-in-out transform hover:scale-105">
  BOOK NOW
</button>

        <img src="/images/addtocart.png "     onClick={()=>{ console.log(cart);addtocart(e) }}
 className="object-contain  active:scale-90" width={36}></img>
     </div>

   
       
    

    </div>


        </div>
    ))
}



</div>

</div>



}