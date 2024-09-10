// import React from "react";

// const workshops = [
//   {
//     title: "Digital Illustration",
//     date: "September 20, 2024",
//     location: "Online / Remote",
//     instructor: "Omar Al-Harbi, Digital Artist",
//     duration: "20 hours",
//     tag: "Drawing & Illustration",
//     tagColor: "bg-teal-500",
//     icon: "/path-to-drawing-icon.svg",
//   },
//   {
//     title: "Arabic Calligraphy and Modern Art",
//     date: "October 5, 2024",
//     location: "Online / Remote",
//     instructor: "Yousef Al-Qahtani, Calligrapher",
//     duration: "12 hours",
//     tag: "Calligraphy",
//     tagColor: "bg-navy-900",
//     icon: "/path-to-calligraphy-icon.svg",
//   },
//   {
//     title: "Photography in Urban Landscapes",
//     date: "November 1, 2024",
//     location: "Online / Remote",
//     instructor: "Laila Al-Saadi, Photographer",
//     duration: "10 hours",
//     tag: "Photography",
//     tagColor: "bg-red-600",
//     icon: "/path-to-photography-icon.svg",
//   },
//   {
//     title: "From Concept to Creation",
//     date: "November 20, 2024",
//     location: "Online / Remote",
//     instructor: "Majid Al-Turki, Sculptor",
//     duration: "6 hours",
//     tag: "Sculpture",
//     tagColor: "bg-orange-500",
//     icon: "/path-to-sculpture-icon.svg",
//   },
//   {
//     title: "Exploring Techniques and Creativity",
//     date: "December 15, 2024",
//     location: "Online / Remote",
//     instructor: "Layla Al-Otaibi, Printmaker",
//     duration: "15 hours",
//     tag: "Printmaking",
//     tagColor: "bg-yellow-300",
//     icon: "/path-to-printmaking-icon.svg",
//   },
//   {
//     title: "Advanced Painting Techniques",
//     date: "March 20, 2025",
//     location: "Online / Remote",
//     instructor: "Huda Al-Rashid, Fine Artist",
//     duration: "8 hours",
//     tag: "Painting",
//     tagColor: "bg-purple-700",
//     icon: "/path-to-painting-icon.svg",
//   },
// ];

// const Workshop = () => {
//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-yankeesBlue">Workshops</h2>
//         <p className="text-gray-700 mt-4">Unlock Your Creative Potential</p>
//         <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4">
//           At SCS, we believe in the power of continuous learning and skill development...
//         </p>
//         <button className="mt-4 py-2 px-6 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
//           Attend a Workshop
//         </button>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {workshops.map((workshop, index) => (
//           <div key={index} className="relative border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
//             <div className="flex items-center">
//               <img src={workshop.icon} alt={workshop.tag} className="w-12 h-12 mr-4" />
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-gray-900">{workshop.title}</h3>
//                 <p className="text-sm text-gray-500">{workshop.date}</p>
//                 <p className="text-sm text-gray-500">{workshop.location}</p>
//                 <p className="text-sm text-gray-500">{workshop.instructor}</p>
//                 <p className="text-sm text-gray-500">{workshop.duration}</p>
//               </div>
//             </div>
//             <div className={`absolute top-0 right-0 py-1 px-3 text-xs font-medium text-white ${workshop.tagColor} rounded-bl-lg`}>
//               {workshop.tag}
//             </div>
//             <button className="mt-6 py-2 px-4 w-full bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600">
//               Register
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button className="py-2 px-6 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800">
//           Discover More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Workshop;


// src/components/Workshop.js

// src/components/Workshop.js

// import React from "react";
// import { FaRegCalendarAlt, FaMapMarkerAlt, FaUserAlt, FaClock } from "react-icons/fa";

// // Sample workshops data
// const workshops = [
//   {
//     title: "Digital Illustration",
//     date: "September 20, 2024",
//     location: "Online / Remote",
//     instructor: "Omar Al-Harbi, Digital Artist",
//     duration: "20 hours",
//     tag: "Drawing & Illustration",
//     tagColor: "bg-teal-500",
//     icon: "/images/drawing-icon.svg",
//   },
//   {
//     title: "Arabic Calligraphy and Modern Art",
//     date: "October 5, 2024",
//     location: "Online / Remote",
//     instructor: "Yousef Al-Qahtani, Calligrapher",
//     duration: "12 hours",
//     tag: "Calligraphy",
//     tagColor: "bg-navy-900",
//     icon: "/images/calligraphy-icon.svg",
//   },
//   {
//     title: "Photography in Urban Landscapes",
//     date: "November 1, 2024",
//     location: "Online / Remote",
//     instructor: "Laila Al-Saadi, Photographer",
//     duration: "10 hours",
//     tag: "Photography",
//     tagColor: "bg-red-600",
//     icon: "/images/photography-icon.svg",
//   },
//   {
//     title: "From Concept to Creation",
//     date: "November 20, 2024",
//     location: "Online / Remote",
//     instructor: "Majid Al-Turki, Sculptor",
//     duration: "6 hours",
//     tag: "Sculpture",
//     tagColor: "bg-orange-500",
//     icon: "/images/sculpture-icon.svg",
//   },
//   {
//     title: "Exploring Techniques and Creativity",
//     date: "December 15, 2024",
//     location: "Online / Remote",
//     instructor: "Layla Al-Otaibi, Printmaker",
//     duration: "15 hours",
//     tag: "Printmaking",
//     tagColor: "bg-yellow-300",
//     icon: "/images/printmaking-icon.svg",
//   },
//   {
//     title: "Advanced Painting Techniques",
//     date: "March 20, 2025",
//     location: "Online / Remote",
//     instructor: "Huda Al-Rashid, Fine Artist",
//     duration: "8 hours",
//     tag: "Painting",
//     tagColor: "bg-purple-700",
//     icon: "/images/painting-icon.svg",
//   },
// ];

// // Workshop Card Component
// const WorkshopCard = ({ workshop }) => {
//   return (
//     <div className="relative border-2 border-gray-400 rounded-lg p-6 pr-12 bg-white shadow-lg flex flex-col">
//       {/* Vertical Tag */}
//       <div
//         className={`absolute right-0 left-10 top-full transform -translate-y-1/2 rotate-90 origin-right ${workshop.tagColor} text-white py-1 px-4 rounded-lg z-10 flex items- justify-center`}
//       >
//         <span className="text-xs font-medium tracking-wide">{workshop.tag}</span>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col flex-grow">
//         {/* Icon and Title */}
//         <div className="flex items-center mb-4">
//           <img src={workshop.icon} alt={workshop.tag} className="w-12 h-12 mr-4" />
//           <h3 className="text-xl font-semibold text-gray-900">{workshop.title}</h3>
//         </div>

//         {/* Workshop Details */}
//         <div className="flex flex-col space-y-1 text-gray-600 text-sm mb-4">
//           <div className="flex items-center">
//             <FaRegCalendarAlt className="mr-2" />
//             <span>{workshop.date}</span>
//           </div>
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="mr-2" />
//             <span>{workshop.location}</span>
//           </div>
//           <div className="flex items-center">
//             <FaUserAlt className="mr-2" />
//             <span>{workshop.instructor}</span>
//           </div>
//           <div className="flex items-center">
//             <FaClock className="mr-2" />
//             <span>{workshop.duration}</span>
//           </div>
//         </div>

//         {/* Register Button */}
//         <button className="py-2 px-4 w-full bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// // Main Workshop Component
// const Workshop = () => {
//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
//       {/* Header with Alignment */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-0">Workshops</h2>
//         <button className="py-2 px-6 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
//           Attend a Workshop
//         </button>
//       </div>

//       {/* Subheading */}
//       <div className="max-w-6xl mx-auto text-center mb-8">
//         <p className="text-gray-700 mt-4">Unlock Your Creative Potential</p>
//         <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-4">
//           At SCS, we believe in the power of continuous learning and skill development. Join our workshops to enhance your skills and connect with like-minded individuals.
//         </p>
//       </div>

//       {/* Workshop Cards Grid */}
//       <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {workshops.map((workshop, index) => (
//           <WorkshopCard key={index} workshop={workshop} />
//         ))}
//       </div>

//       {/* Discover More Button */}
//       <div className="max-w-6xl mx-auto flex justify-center mt-8">
//         <button className="py-2 px-6 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-800">
//           Discover More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Workshop;

// import React from "react";
// import { FaRegCalendarAlt, FaMapMarkerAlt, FaUserAlt, FaClock } from "react-icons/fa";

// import "./Workshop.css";

// const Workshop = () => {
//   const workshops = [
//     {
//       title: "Digital Illustration",
//       date: "September 20, 2024",
//       location: "Online / Remote",
//       instructor: "Omar Al-Harbi, Digital Artist",
//       duration: "20 hours",
//       tag: "Drawing & Illustration",
//       tagColor: "bg-teal-500",
//       icon: "/images/drawing-icon.svg",
//     },
//     {
//       title: "Arabic Calligraphy and Modern Art",
//       date: "October 5, 2024",
//       location: "Online / Remote",
//       instructor: "Yousef Al-Qahtani, Calligrapher",
//       duration: "12 hours",
//       tag: "Calligraphy",
//       tagColor: "bg-blue-900",
//       icon: "/images/calligraphy-icon.svg",
//     },
//     {
//       title: "Photography in Urban Landscapes",
//       date: "November 1, 2024",
//       location: "Online / Remote",
//       instructor: "Laila Al-Saadi, Photographer",
//       duration: "10 hours",
//       tag: "Photography",
//       tagColor: "bg-red-600",
//       icon: "/images/photography-icon.svg",
//     },
//     {
//       title: "From Concept to Creation",
//       date: "November 20, 2024",
//       location: "Online / Remote",
//       instructor: "Majid Al-Turki, Sculptor",
//       duration: "6 hours",
//       tag: "Sculpture",
//       tagColor: "bg-orange-500",
//       icon: "/images/sculpture-icon.svg",
//     },
//     {
//       title: "Exploring Techniques and Creativity",
//       date: "December 15, 2024",
//       location: "Online / Remote",
//       instructor: "Layla Al-Otaibi, Printmaker",
//       duration: "15 hours",
//       tag: "Printmaking",
//       tagColor: "bg-yellow-300",
//       icon: "/images/printmaking-icon.svg",
//     },
//     {
//       title: "Advanced Painting Techniques",
//       date: "March 20, 2025",
//       location: "Online / Remote",
//       instructor: "Huda Al-Rashid, Fine Artist",
//       duration: "8 hours",
//       tag: "Painting",
//       tagColor: "bg-purple-700",
//       icon: "/images/painting-icon.svg",
//     },
//   ];

//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10">
//             Workshops
//           </h2>
//           <button className="px-24 py-2 text-white bg-red-500 rounded hover:bg-red-700">
//             Attend a Workshop
//           </button>
//         </div>

//         <p className="text-base md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2">
//           Unlock Your Creative Potential
//         </p>
//         <p className="text-base md:text-base lg:text-lg text-gray-700 mt-2 mb-0">
//           At SCS, we believe in the power of continuous learning and skill development. Our workshops are designed to help creatives at all levels—whether you are just starting out or looking to refine your craft. Through our partnership with the Ministry of Culture's Cultural Learning Hub (CLH), we offer a diverse range of workshops that provide hands-on experience, practical knowledge, and invaluable insights into various creative fields.
//         </p>
//       </div>

//       <div className="workshop-container space-y-4">
//         {workshops.map((workshop, index) => (
//           <div key={index} className="workshop-card border-2 border-gray-300 rounded-lg flex relative p-4">
//             <div className="w-full space-y-2">
//               <h3 className="text-lg font-semibold">{workshop.title}</h3>
//               <div className="flex items-center">
//                 <FaRegCalendarAlt className="mr-2" />
//                 <span>{workshop.date}</span>
//               </div>
//               <div className="flex items-center">
//                 <FaMapMarkerAlt className="mr-2" />
//                 <span>{workshop.location}</span>
//               </div>
//               <div className="flex items-center">
//                 <FaUserAlt className="mr-2" />
//                 <span>{workshop.instructor}</span>
//               </div>
//               <div className="flex items-center">
//                 <FaClock className="mr-2" />
//                 <span>{workshop.duration}</span>
//               </div>
//               <div className="flex justify-end">
//                 <button className="mt-4  mr-12 px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
//                   Register
//                 </button>
//               </div>
//             </div>
//             <div className={`tag-container ${workshop.tagColor} text-white absolute top-0 right-0 m-2 px-2 py-1 rounded`}>
//               <span className="text-sm">{workshop.tag}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-purple-500 rounded hover:bg-purple-700">
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Workshop;

import React from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaUserAlt, FaClock } from "react-icons/fa";

import drawingIcon from '../assets/drawing_icon.png';
import calligraphyIcon from '../assets/calligraphy_icon.png';
import graphicsIcon from '../assets/graphics_icon.png';
import mixedMediaIcon from '../assets/mixedMedia_icon.png';
import paintingIcon from '../assets/painting_icon.png';
import photographyIcon from '../assets/photography_icon.png';
import printMakingIcon from '../assets/printMaking_icon.png';
import sculptureIcon from '../assets/sculpture_icon.png';



const Workshop = () => {
  const workshops = [
    {
      title: "Digital Illustration",
      date: "September 20, 2024",
      location: "Online / Remote",
      instructor: "Omar Al-Harbi, Digital Artist",
      duration: "20 hours",
      tag: "Drawing & Illustration",
      tagColor: "bg-pewter-blue",
      icon: drawingIcon,
    },
    {
      title: "Arabic Calligraphy and Modern Art",
      date: "October 5, 2024",
      location: "Online / Remote",
      instructor: "Yousef Al-Qahtani, Calligrapher",
      duration: "12 hours",
      tag: "Calligraphy",
      tagColor: "bg-yankees-blue",
      icon: calligraphyIcon,
    },
    {
      title: "Photography in Urban Landscapes",
      date: "November 1, 2024",
      location: "Online / Remote",
      instructor: "Laila Al-Saadi, Photographer",
      duration: "10 hours",
      tag: "Photography",
      tagColor: "bg-madder-lake",
      icon: photographyIcon,
    },
    {
      title: "From Concept to Creation",
      date: "November 20, 2024",
      location: "Online / Remote",
      instructor: "Majid Al-Turki, Sculptor",
      duration: "6 hours",
      tag: "Sculpture",
      tagColor: "bg-royal-orange",
      icon: sculptureIcon,
    },
    {
      title: "Exploring Techniques and Creativity",
      date: "December 15, 2024",
      location: "Online / Remote",
      instructor: "Layla Al-Otaibi, Printmaker",
      duration: "15 hours",
      tag: "Printmaking",
      tagColor: "bg-deep-peach",
      icon: printMakingIcon,
    },
    {
      title: "Advanced Painting Techniques",
      date: "March 20, 2025",
      location: "Online / Remote",
      instructor: "Huda Al-Rashid, Fine Artist",
      duration: "8 hours",
      tag: "Painting",
      tagColor: "bg-palatinate-purple",
      icon: paintingIcon,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-yankees-blue mb-10">
            Workshops
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Attend a Workshop
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
          Unlock Your Creative Potential
        </p>
        <p className="text-base md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-regular">
        At SCS, we believe in the power of continuous learning and skill development. Our workshops are designed to help creatives at all
        levels—whether you are just starting out or looking to refine your craft. Through our partnership with the Ministry of Culture's Cultural
        Learning Hub (CLH), we offer a diverse range of workshops that provide hands-on experience, practical knowledge, and invaluable
        insights into various creative fields.
        </p>
      </div>

      <div className="workshop-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {workshops.map((workshop, index) => (
    <div
      key={index}
      className="workshop-card border-2 border-gray-300 rounded-lg flex relative p-4">
      <div className="w-full pr-6">
        {/* Title and Image in one line */}
        <div className="flex justify-between items-center mb-4 text-yankees-blue">
          <h3 className="text-lg font-montserrat-medium">{workshop.title}</h3>
          <img
            src={workshop.icon}
            alt="Card Icon"
            className="w-20 h-10 object-scale-down ml-24" // Small icon size
          />
        </div>
        
        <div className="flex items-center mb-2">
          <FaRegCalendarAlt className="mr-2 text-madder-lake" />
          <span className="font-montserrat-regular">{workshop.date}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 text-madder-lake" />
          <span className="font-montserrat-regular">{workshop.location}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaUserAlt className="mr-2 text-madder-lake" />
          <span className="font-montserrat-regular">{workshop.instructor}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaClock className="mr-2 text-madder-lake" />
          <span className="font-montserrat-regular">{workshop.duration}</span>
        </div>
        
        <div className="flex flex-col items-end">
          <button className="px-10 py-1 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white font-montserrat-light">
            Register
          </button>
        </div>
      </div>
      <div
              className={`tag-container ${workshop.tagColor} text-white absolute rounded top-0 right-0 h-full flex items-center justify-center`}
              style={{ width: '30px' }}
            >
        <span className="font-light transform -rotate-90 whitespace-nowrap font-montserrat-light">{workshop.tag}</span>
      </div>
    </div>
  ))}
</div>

      {/* <div className="workshop-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="workshop-card border-2 border-gray-300 rounded-lg flex relative p-4"
          >
            <div className="w-full pr-6">
            <div className="flex justify-between items-center mt-2 text-gray-700">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{workshop.title}</h3>
            </div>
            <div className="flex items-center space-x-4 ">
              <img src={workshop.icon} alt={'Card Icon'}/>
            </div>
          </div>
                

              <div className="flex items-center">
                <FaRegCalendarAlt className="mr-2 text-red-500" />
                <span>{workshop.date}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                <span>{workshop.location}</span>
              </div>
              <div className="flex items-center">
                <FaUserAlt className="mr-2 text-red-500" />
                <span>{workshop.instructor}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2 text-red-500" />
                <span>{workshop.duration}</span>
              </div>
              <div className="flex flex-col items-end mt-4 mr-4">
                <button className="px-10 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white">
                  Register
                </button>
              </div>
            </div>
            <div
              className={`tag-container ${workshop.tagColor} text-white absolute rounded top-0 right-0 h-full flex items-center justify-center`}
              style={{ width: '30px' }}
            >
              <span className="font-light transform -rotate-90 whitespace-nowrap">{workshop.tag}</span>
            </div>
          </div>
        ))}
      </div> */}
      {/* Discover More Button */}
      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Workshop;



