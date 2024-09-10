import React from 'react';
import { MdHexagon } from "react-icons/md";

const Card = ({ image, title, deadline, eligibility, buttonText }) => {
  return (
    
      <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col justify-between lg:max-w-sm">
      <img className="object-cover w-full h-48 rounded-t-lg" src={image} alt={title} />
      {/* <div className=" flex flex-col"> */}
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        
        <div className="flex items-start">
          <MdHexagon className="text-red-600 mr-4 mt-1" />
          <p className="text-gray-600">Deadline:</p>
        </div>
        <div >
          <p className="text-gray-600 ml-8 mb-4">{deadline}</p>
        </div>
        
        <div className="flex items-start">
          <MdHexagon className="text-red-600 mr-4 mt-1" />
          <p className="text-gray-600">Eligibility: </p>
        </div>
        <div>
        <p className="text-gray-600 ml-8 mb-4">{eligibility}</p>
        </div>

        <div className='p-4'>
        <button className="w-full px-4 py-2 mt-10 justify-stretch  text-sm  text-red-500 bg-white outline-red-500 rounded shadow  hover:bg-red-700">
          {buttonText}
        </button>
        </div>
      </div>
    // </div>
  );
};

export default Card;