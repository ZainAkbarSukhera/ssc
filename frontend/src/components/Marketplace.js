import React, { useState } from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';

import im1 from '../assets/After Marylin.png';
import im2 from '../assets/Frog.png';
import im3 from '../assets/Landscapes-13.png';
import im4 from '../assets/Landscapes-11.png';

const Card = ({ image, title, artist, initialLikes, initialViews }) => {
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
    <div className="bg-yankees-blue p-1 w-full">
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-cover mb-4" />

      {/* Title and Stats */}
      <div className="flex items-center justify-between w-full mt-2 text-xs text-white">
        <h3 className="text-lg font-montserrat-medium text-white">{title}</h3>
        <div className="flex space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${liked ? 'text-red-500' : ''}`}
          >
            <FaThumbsUp /> <span>{likes}</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaEye /> <span>{views}</span>
          </div>
        </div>
      </div>

      {/* Artist */}
      <div className="flex flex-col">
        <p className="text-white font-montserrat-light text-sm">{artist}</p>
      </div>
    </div>
  );
};

const Marketplace = () => {
  const artworks = [
    {
      image: im1,
      title: 'After Marylin',
      artist: 'Noura Al-Mutairi',
      initialLikes: 25700,
      initialViews: 50000,
    },
    {
      image: im4,
      title: 'Landscapes (XI)',
      artist: 'Ahmed Al-Turki',
      initialLikes: 19500,
      initialViews: 37000,
    },
    {
      image: im2,
      title: 'Frog',
      artist: 'Hanan Al-Ahmadi',
      initialLikes: 17400,
      initialViews: 30000,
    },
    {
      image: im3,
      title: 'Landscapes (VIII)',
      artist: 'Ahmed Al-Turki',
      initialLikes: 15400,
      initialViews: 25000,
    },
  ];

  return (
    <div className="p-8 bg-yankees-blue">
      {/* Heading and Buttons */}
      {/* <div className="flex justify-between items-center mb-6">
        <h3 className="text-white text-xl font-bold">Marketplace</h3>
        <div className="space-x-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded">Buy</button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">Sell</button>
        </div>
      </div> */}

      <div className="flex justify-between items-center w-full">
          <h2 className=" text-white text-3xl md:text-4xl lg:text-5xl font-montserrat-medium mb-10 ">
            Marketplace
          </h2>
          <div className='hidden md:flex space-x-1'>
          <button className="bg-fire-opal hover:bg-orange-400 text-white py-2 px-12 rounded font-montserrat-light">Buy</button>
          <button className="bg-madder-lake hover:bg-red-600 text-white py-2 px-12 rounded font-montserrat-light">Sell</button>
          </div>
        </div>

      {/* Description */}
      {/* <p className="text-gray-600 mb-6">
        Buy, Sell and Celebrate Creativity. Our Marketplace is a hub for creatives to showcase and sell their work, from NFTs and digital prints to physical artworks. Whether you're an artist looking to monetize your creations or a collector in search of unique pieces, the Marketplace offers a curated selection of Saudi creativity at its finest. Support local talent and own a piece of the Kingdom's vibrant artistic scene.
      </p> */}
      <p className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 font-montserrat-regular">
        Buy, Sell and Celebrate Creativity
        </p>
        <p className="text-base md:text-base lg:text-lg text-white mt-2 mb-4 font-montserrat-regular">
        Our Marketplace is a hub for creatives to showcase and sell their work, from NFTs and digital prints to physical artworks. Whether you're an artist looking to monetize your creations or a collector in search of unique pieces, the Marketplace offers a curated selection of Saudi creativity at its finest. Support local talent and own a piece of the Kingdom's vibrant artistic scene.
        </p>

      {/* Artworks */}
      <div className="flex space-x-4 mb-8">
        {artworks.map((art, index) => (
          <Card key={index} {...art} />
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

export default Marketplace;
