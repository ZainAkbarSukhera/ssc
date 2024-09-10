import React, { useState } from 'react';
import { FaThumbsUp, FaEye,FaLocationArrow } from 'react-icons/fa';

import fPortrait from '../assets/fatimaPortrait.png';
import f1 from '../assets/fatima1.png';
import f2 from '../assets/fatima2.png';
import f3 from '../assets/fatima3.png';

import oPortrait from '../assets/omarPortrait.png';
import o1 from '../assets/omar1.png';
import o2 from '../assets/omar2.png';
import o3 from '../assets/omar3.png';

import yPortrait from '../assets/yousafPortrait.png';
import y1 from '../assets/yousaf1.png';
import y2 from '../assets/yousaf2.png';
import y3 from '../assets/yousaf3.png';

import lPortrait from '../assets/lailaPortrait.png';
import l1 from '../assets/laila1.png';
import l2 from '../assets/laila2.png';
import l3 from '../assets/laila3.png';

// import b1 from '../assets/Badge-teal.png';
// import b2 from '../assets/Badge-yellow.png';

const CreativeCard = ({ profileImage, topImages, name, location, profession, initialLikes, initialViews }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); // To track if the user has liked the item
  const [views] = useState(initialViews);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2 flex-1">
      {/* Top Images */}
      <div className="flex space-x-1 mb-0 ">
        {topImages.map((image, index) => (
          <img key={index} src={image} alt={`Top image ${index + 1}`} className="h-16 w-full object-cover rounded" />
        ))}
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-2">
        <img src={profileImage} alt={name} className="h-24 w-24 rounded-full border-4 border-white shadow-lg" />
      </div>

      {/* Name, Location, and Profession */}
      <h3 className="text-lg font-bold text-center font-montserrat-regular text-yankees-blue">{name}</h3>
      <div className='flex justify-center'>
      <FaLocationArrow className='text-madder-lake text-sm mt-1 mr-2'/>
      <p className="text-madder-lake text-center font-montserrat-light">{location}</p>

      </div>
     
      <p className="text-palatinate-purple text-center text-sm mb-2 font-montserrat-light">{profession}</p>

      {/* Badges, Likes, and Views */}
      <div className="flex justify-between items-center mt-2 text-gray-700">
        <div className="flex items-center space-x-2">
          {/* Placeholder for badges */}
          <span className="bg-gray-200 text-sm px-2 py-1 rounded-full">Badge 1</span>
          <span className="bg-gray-200 text-sm px-2 py-1 rounded-full">Badge 2</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${liked ? 'text-madder-lake' : ''}`}
          >
            <FaThumbsUp /> <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaEye /> <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Creatives = () => {
  const creatives = [
    {
      profileImage: fPortrait,
      topImages: [f1, f2, f3],
      name: 'Fatima Al-Zahrani',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Graphic Designer',
      initialLikes: 22000,
      initialViews: 45000,
    },
    {
      profileImage: oPortrait,
      topImages: [o1, o2, o3],
      name: 'Omar Al-Harbi',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Digital Artist',
      initialLikes: 18000,
      initialViews: 36000,
    },
    {
      profileImage: yPortrait,
      topImages: [y1, y2, y3],
      name: 'Yousef Al-Qahtani',
      location: 'Makkah, Saudi Arabia',
      profession: 'Photographer',
      initialLikes: 15000,
      initialViews: 30000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Laila Al-Saadi',
      location: 'Dammam, Saudi Arabia',
      profession: 'Photographer',
      initialLikes: 12000,
      initialViews: 24000,
    },
  ];

  return (
    <div className="p-8 bg-yankees-blue">
      {/* Heading and "Create Your Profile" Button */}
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Creatives</h1>
        <button className="bg-red-500 text-white py-24 px-2 rounded hover:bg-red-700">Create Your Profile</button>
      </div> */}
       <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-white font-montserrat-medium">
            Creatives
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Create Your Profile
          </button>
        </div>

      {/* Description */}
      {/* <p className="text-base md:text-lg lg:text-xl text-white mb-6 ">
        Explore Our Creative Directory. Our platform is home to a diverse and dynamic directory of Saudi creatives, from artists and designers to writers and innovators. Whether you're looking for collaboration or inspiration, our directory is the place to discover the best and brightest talents in the Kingdom. Connect with like-minded individuals, share your work, and grow your creative network.
      </p> */}
      <p className="text-base  text-white md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2 font-montserrat-regular">
        Explore Our Creative Directory
        </p>
        <p className="text-base text-white md:text-base lg:text-lg mt-2 mb-4 font-montserrat-regular">
          Our platform is home to a diverse and dynamic directory of Saudi creatives, from artists and designers to writers and innovators. Whether you're looking for collaboration or inspiration, our directory is the place to discover the best and brightest talents in the Kingdom. Connect with like-minded individuals, share your work, and grow your creative network.
        </p>

      {/* Creative Cards */}
      <div className="flex flex-wrap gap-4 mb-8">
        {creatives.map((creative, index) => (
          <CreativeCard key={index} {...creative} />
        ))}
      </div>

      {/* Discover More Button */}
      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Creatives;