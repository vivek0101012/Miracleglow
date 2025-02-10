 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Heroimg from "./components/heroimage"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import Footer from "./components/footer"
import { Cartprovider } from "./context/Cartcontext"
import Cartpage from "./components/cart"
import Aboutus from "./components/aboutus"
function App(){


  return <BrowserRouter>
    <Cartprovider>
  <div className="  bg-white w-full min-h-screen space-y-2">
    <Navbar></Navbar>

    <Routes>
    <Route
      path="/"
      element={
        <>
          <Heroimg />
           <Services />
          
       
       
          <Testimonials />
        </>
      }
    />
    <Route path="/cart" element={<Cartpage />} />
    <Route path="/aboutus" element={<Aboutus />} />
  </Routes>
<Footer></Footer>


  </div>
  </Cartprovider>
  </BrowserRouter>




}


export default App