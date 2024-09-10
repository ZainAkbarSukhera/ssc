// import React from 'react';
// import { Carousel } from "flowbite-react";
// import banner from '../assets/SCS Logo.png';
// import "./App.css";
// import "./fonts/GE Dinar One Medium.ttf";


// const Home = () => {
//   return (
//     <div className='bg-white'>
//       <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
//         <Carousel className='w-full mx-auto'>
//           <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
//             <div>
//               <img src={banner} alt="Banner" />
//             </div>
            
//             {/* hero text */}
//             <div className='md:w-1/2'>
//               <h1 className='text-5xl font-semibold mb-4 text-gray-700 md:w-3/4 leading-snug'>
//                 Medical Bhashan Here
//                 <span className='text-gray-700 leading-snug'> since 2002</span>
//               </h1>
//               <p className='text-gray-700 text-base mb-8'>Contact us for Business</p>
//             </div>
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import "../App.css";
import Hero from '../assets/SCS Hero Sign.png'; // Adjust the path to where your image is located

const Home = () => {
  return (
    <section className="mt-28 flex flex-col md:flex-row items-center justify-center md:justify-between py-12 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
      
      {/* Left Side: Logo */}
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-stretch">
        <img src={Hero} alt="Saudi Creative Streams Logo" className="w-64 md:w-5/6" />
      </div>
      
      {/* Right Side: Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-yankees-blue mb-4 ml-2 font-arabicMedium">
          روافد  الإبداع السعودي
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium  text-yankees-blue mb-10 font-montserrat-medium">
          Saudi Creative Streams
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-yankees-blue text-justify font-montserrat-light">
          In Saudi Arabia, numerous talented individuals remain hidden like water beneath the desert. Though they may not be immediately visible, they are there, brimming with creativity and potential, just waiting to be uncovered. Like the desert, which appears dry and barren on the surface, there's a rich world of creativity beneath, eager to be brought to light.
        </p>
      </div>
      
    </section>
  );
};

export default Home;
