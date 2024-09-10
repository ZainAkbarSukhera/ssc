import React from 'react';
import {FaLocationArrow } from 'react-icons/fa';

import alWaleedLogo from '../assets/alWaleedLogo.png';
import alWaleed1 from '../assets/alWaleed1.png';
import alWaleed2 from '../assets/alWaleed2.png';
import alWaleed3 from '../assets/alWaleed3.png';

import ajLogo from '../assets/artJameelLogo.png';
import aj1 from '../assets/artJameel1.png';
import aj2 from '../assets/artJameel2.png';
import aj3 from '../assets/artJameel3.png';

import miskLogo from '../assets/miskLogo.png';
import misk1 from '../assets/misk1.png';
import misk2 from '../assets/misk2.png';
import misk3 from '../assets/misk3.png';

import pifLogo from '../assets/pifLogo.png';
import pif1 from '../assets/pif1.png';
import pif2 from '../assets/pif2.png';
import pif3 from '../assets/pif3.png';

import icon1 from '../assets/artworkBought.png';
import icon2 from '../assets/artworkResold.png';
import icon3 from '../assets/artistSupportedIcon.png';
import icon4 from '../assets/financial contribution.png';

// const Card = ({ images, logo, title, location, stats }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4">
//       {/* Images */}
//       <div className="grid grid-cols-3 gap-1 mb-4">
//         {images.map((src, index) => (
//           <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded" />
//         ))}
//       </div>

//       {/* Logo */}
//       <div className="flex justify-center mb-4">
//         <img src={logo} alt="logo" className="h-16" />
//       </div>

//       {/* Title */}
//       <h2 className="text-xl font-bold text-center">{title}</h2>

//       {/* Location */}
//       {/* <p className="text-center text-gray-600 mb-4">
//         <span className="text-red-500">📍</span> {location}
//       </p> */}
//       <div className='flex justify-center'>
//       <FaLocationArrow className='text-red-500 text-sm mt-1 mr-2'/>
//       <p className="text-red-500 text-center mb-4">{location}</p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-2 gap-4 align-middle text-center text-gray-700">
//         <div>
//           <p className="font-bold text-xl">{stats.artworksBought}</p>
//           <div className="flex justify-between items-center mb-4 text-gray-700">
//           <img
//             src={icon1}
//             alt="Card Icon 1"
//             className="w-20 h-10 object-scale-down ml-24"/> 
//           <p className="text-sm">No. of Artworks Bought</p>
//         </div>
          
//         </div>
//         <div>
//           <p className="font-bold text-xl">{stats.artworksResold}</p>
//           <div className="flex justify-between items-center mb-4 text-gray-700">
//           <img
//             src={icon2}
//             alt="Card Icon 2"
//             className="w-20 h-10 object-scale-down ml-24"/> 
//             <p className="text-sm">No. of Artworks Resold</p>
//         </div>
          
//         </div>
//         <div>
//           <p className="font-bold text-xl">{stats.artistsSupported}</p>
//           <div className="flex justify-between items-center mb-4 text-gray-700">
//           <img
//             src={icon3}
//             alt="Card Icon 3"
//             className="w-20 h-10 object-scale-down ml-24"/> 
//             <p className="text-sm">No. of Artists Supported</p>
//         </div>
         
//         </div>
//         <div>
//           <p className="font-bold text-xl">{stats.financialContribution}</p>
//           <div className="flex justify-between items-center mb-4 text-gray-700">
//           <img
//             src={icon4}
//             alt="Card Icon 4"
//             className="w-20 h-10 object-scale-down ml-24"/> 
//             <p className="text-sm">Total Financial Contribution</p>
//         </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// // Example usage of the Card component
// const Patrons = () => {
//   const exampleData = [
//     {
//       images: [
//         pif1,pif2,pif3
//       ],
//       logo: pifLogo,
//       title: 'Public Investment Fund 1',
//       location: 'Riyadh, Saudi Arabia',
//       stats: {
//         artworksBought: 50,
//         artworksResold: 7,
//         artistsSupported: 25,
//         financialContribution: '775,000 SAR',
//       },
//     },
//     {
//       images: [
//         alWaleed1,alWaleed2,alWaleed3
//       ],
//       logo: alWaleedLogo,
//       title: 'al Waleed Philanthrophies',
//       location: 'Riyadh, Saudi Arabia',
//       stats: {
//         artworksBought: 30,
//         artworksResold: 5,
//         artistsSupported: 14,
//         financialContribution: '425,000 SAR',
//       },
//     },
//     {
//       images: [
//         misk1,misk2,misk3
//       ],
//       logo: miskLogo,
//       title: 'Misk Foundation',
//       location: 'Riyadh, Saudi Arabia',
//       stats: {
//         artworksBought: 15,
//         artworksResold: 3,
//         artistsSupported: 10,
//         financialContribution: '260,000 SAR',
//       },
//     },
//     {
//       images: [
//         aj1,aj2,aj3
//       ],
//       logo: ajLogo,
//       title: 'Art Jameel',
//       location: 'Jeddah, Saudi Arabia',
//       stats: {
//         artworksBought: 9,
//         artworksResold: 2,
//         artistsSupported: 7,
//         financialContribution: '137,000 SAR',
//       },
//     },
//   ];

//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10">
//             Patrons
//           </h2>
//           <button className="px-24 py-2 text-white bg-red-500 rounded hover:bg-red-700">
//             Become a Patron
//           </button>
//         </div>

//         <p className="text-base md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2">
//           Supporting the Future of Saudi Creativity
//         </p>
//         <p className="text-base md:text-base lg:text-lg text-gray-700 mt-2 mb-0">
//         At SCS, we are deeply grateful to the patrons who believe in the power of art, design and innovation to shape the future of Saudi
//         Arabia. Their generous support enables us to identify, nurture and connect the Kingdom’s most promising creatives, helping them
//         to realise their full potential and contribute to the cultural and creative landscape.
//         </p>
//       </div>
      
//        <div className="flex justify-around items-center  space-x-4">
//       {exampleData.map((data, index) => (
//         <Card key={index} {...data} />
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Patrons;

const Card = ({ images, logo, title, location, stats }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4">
      {/* Images */}
      <div className="grid grid-cols-3 gap-1 mb-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded" />
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="logo" className="h-16" />
      </div>

      {/* Title */}
      <h2 className="text-xl text-yankees-blue font-bold text-center font-montserrat-medium">{title}</h2>

      {/* Location */}
      <div className="flex justify-center items-center mb-4">
        <FaLocationArrow className="text-madder-lake text-sm mt-1 mr-2" />
        <p className="text-madder-lake text-center font-montserrat-light">{location}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-center text-palatinate-purple">
        <div className="flex flex-col items-center">
          
          <div className="flex items-center">
            <img src={icon1} alt="Icon 1" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs text-left font-montserrat-light">No. of Artworks Bought:</p>
          </div>
          <p className="font-bold text-xl">{stats.artworksBought}</p>
        </div>
        <div className="flex flex-col items-center">
          
          <div className="flex items-center">
            <img src={icon2} alt="Icon 2" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs text-left font-montserrat-light">No. of Artworks Resold:</p>
          </div>
          <p className="font-bold text-xl">{stats.artworksResold}</p>
        </div>
        <div className="flex flex-col items-center">
          
          <div className="flex items-center">
            <img src={icon3} alt="Icon 3" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs text-left font-montserrat-light">No. of Artists Supported:</p>
          </div>
          <p className="font-bold text-xl">{stats.artistsSupported}</p>
        </div>
        <div className="flex flex-col items-center">
         
          <div className="flex items-center">
            <img src={icon4} alt="Icon 4" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs text-left font-montserrat-light">Total Financial Contribution:</p>
          </div>
          <p className="font-bold text-xl">{stats.financialContribution}</p>
        </div>
      </div>
    </div>
    
  );
};

// Example usage of the Card component
const Patrons = () => {
  const exampleData = [
    {
      images: [pif1, pif2, pif3],
      logo: pifLogo,
      title: 'Public Investment Fund 1',
      location: 'Riyadh, Saudi Arabia',
      stats: {
        artworksBought: 50,
        artworksResold: 7,
        artistsSupported: 25,
        financialContribution: '775,000 SAR',
      },
    },
    {
      images: [alWaleed1, alWaleed2, alWaleed3],
      logo: alWaleedLogo,
      title: 'Alwaleed Philanthropies',
      location: 'Riyadh, Saudi Arabia',
      stats: {
        artworksBought: 30,
        artworksResold: 5,
        artistsSupported: 14,
        financialContribution: '425,000 SAR',
      },
    },
    {
      images: [misk1, misk2, misk3],
      logo: miskLogo,
      title: 'Misk Foundation',
      location: 'Riyadh, Saudi Arabia',
      stats: {
        artworksBought: 15,
        artworksResold: 3,
        artistsSupported: 10,
        financialContribution: '260,000 SAR',
      },
    },
    {
      images: [aj1, aj2, aj3],
      logo: ajLogo,
      title: 'Art Jameel',
      location: 'Jeddah, Saudi Arabia',
      stats: {
        artworksBought: 9,
        artworksResold: 2,
        artistsSupported: 7,
        financialContribution: '137,000 SAR',
      },
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-medium text-yankees-blue mb-10">
            Patrons
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Become a Patron
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-bold font-montserrat-regular text-yankees-blue mb-2">
          Supporting the Future of Saudi Creativity
        </p>
        <p className="text-base md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-regular">
          At SCS, we are deeply grateful to the patrons who believe in the power of art, design, and innovation to shape the future of Saudi Arabia. Their generous support enables us to identify, nurture, and connect the Kingdom’s most promising creatives, helping them realize their full potential and contribute to the cultural and creative landscape.
        </p>
      </div>

      <div className="flex justify-around items-center space-x-4">
        {exampleData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Patrons;
