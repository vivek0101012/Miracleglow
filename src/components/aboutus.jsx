import { useState, useEffect } from "react";

const images = Array.from({ length: 10 }, (_, i) => `/images/image${i + 1}.jpg`);

export default function AboutUs() {
  const [currentImage, setCurrentImage] = useState(0);
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      logo: "/images/facebook.png"
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      logo: "/images/twitter.png"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      logo: "/images/linkedin.png"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      logo: "/images/instagram.png"
    }
  ];
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
     
      <div className="relative w-full max-w-4xl h-72 md:h-96 rounded-lg overflow-hidden shadow-lg mt-10">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

  
      <div className="max-w-4xl px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6">
          About <span className="text-[#BA7894]">Us</span>
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          At <strong>Miracle Glow salon</strong>, we believe in delivering more than just products—we create experiences. Our journey started with a simple idea: to bring high-quality, thoughtfully designed products/services to people who value excellence.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            We are dedicated to innovation, quality, and customer satisfaction. Whether it's a small detail or a major breakthrough, we strive for excellence in everything we do.
          </p>
        </div>

  
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">What We Do</h2>
          <p className="text-gray-600 mt-2">
            From concept to reality, we provide top-notch [products/services] that enhance everyday life. Our team works tirelessly to bring you the best in the industry.
          </p>
        </div>

    
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#BA7894]">🌟 Quality First</h3>
            <p className="text-gray-600 mt-2">Every product is crafted with precision and durability in mind.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#BA7894]">💡 Innovation</h3>
            <p className="text-gray-600 mt-2">We continuously evolve to bring the latest and best solutions.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#BA7894]">❤️ Customer Focus</h3>
            <p className="text-gray-600 mt-2">Your satisfaction is our priority, ensuring the best experience.</p>
          </div>
        </div>

       
      </div>
    </div>
  );
}
