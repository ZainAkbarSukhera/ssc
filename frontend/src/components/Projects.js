// import React from 'react';
// import Card from './Card';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import image1 from '../assets/Aramco.png';
// import image2 from '../assets/Neom.jpg';
// import image3 from '../assets/Riyadh Expo 2030.png';
// import image4 from '../assets/STC.jpg';
// import image5 from '../assets/World Cup 2034.jpg';

// const projects = [
//   {
//     image: image1,
//     title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
//     deadline: 'November 15, 2024',
//     eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image2,
//     title: 'NEOM - Future of Living: Architectural Design Competition',
//     deadline: 'December 15, 2024',
//     eligibility: 'Open to Saudi architects',
//     buttonText: 'Apply',
//   },
//   {
//     image: image3,
//     title: 'Expo 2030 - Future Forward',
//     deadline: 'January 15, 2025',
//     eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image4,
//     title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
//     deadline: 'October 20, 2024',
//     eligibility: 'Open to Saudi tech developers and digital artists',
//     buttonText: 'Apply',
//   },
//   {
//     image: image5,
//     title: 'FIFA 2034 - Game on',
//     deadline: 'March 1, 2025',
//     eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
//     buttonText: 'Apply',
//   }
// ];

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

// // const Projects = () => {
// //   return (
// //     <div className="p-8">
// //       <div className=" text-right mb-8 mr-8">
// //          {/*Heading */}
// //         ` <div className='flex w-full '>
// //          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-left ">
// //         Projects
// //       </h2>
// //       <span className='text-right'>
// //         <button className="px-24 py-2 mb-4  text-white bg-red-500 rounded  hover:bg-red-700">Submit Your Idea</button>
// //         </span>
// //          </div>
      

// //       {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-left">
// //         Projects
// //       </h2>
      
// //         <button className="px-24 py-2 mb-4 text-white bg-red-500 rounded  hover:bg-red-700">Submit Your Idea</button> */}
// //         {/* Vision Paragraph */}
// //         <p className="text-base md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2 text-left">
// //         Join Exciting opportunities
// //       </p>
// //       <p className="text-base md:text-lg lg:text-xl text-gray-700  text-left mt-2 mb-0">
// //         This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
// //       </p>

// //       </div>
// //       <Carousel responsive={responsive} infinite={true} autoPlay={false} itemClass="px-2" >
// //         {projects.map((project, index) => (
// //           <Card
// //             key={index}
// //             image={project.image}
// //             title={project.title}
// //             deadline={project.deadline}
// //             eligibility={project.eligibility}
// //             buttonText={project.buttonText}
// //           />
// //         ))}
// //       </Carousel>
      
// //       <div className="text-center mt-6">
// //         <button className="px-32 py-2 text-white bg-purple-500 rounded hover:bg-purple-700">Discover More</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;

// const Projects = () => {
//   return (
//     <div className="p-8 mt-0"> {/* Add margin-top to avoid overlap */}
//       <div className="mb-8">
//         {/* Heading and Button in the Same Line */}
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10">
//             Projects
//           </h2>
//           <button className="px-24 py-2 text-white bg-red-500 rounded hover:bg-red-700">
//             Submit Your Idea
//           </button>
//         </div>

//         {/* Vision Paragraph */}
//         <p className="text-base md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2">
//           Join Exciting Opportunities
//         </p>
//         <p className="text-base md:text-base lg:text-lg text-gray-700 mt-2 mb-0">
//           This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
//         </p>
//       </div>

//       <div className="relative z-10">
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           autoPlay={false}
//           itemClass="px-2"
//         >
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               image={project.image}
//               title={project.title}
//               deadline={project.deadline}
//               eligibility={project.eligibility}
//               buttonText={project.buttonText}
//             />
//           ))}
//         </Carousel>
//       </div>

//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-purple-500 rounded hover:bg-purple-700">
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import { MdHexagon } from "react-icons/md";
// import Card from './Card';
import image1 from '../assets/Aramco.png';
import image2 from '../assets/Neom.jpg';
import image3 from '../assets/Riyadh Expo 2030.png';
import image4 from '../assets/STC.jpg';
import image5 from '../assets/World Cup 2034.jpg';

const projects = [
  {
    image: image1,
    title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
    deadline: 'November 15, 2024',
    eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
    buttonText: 'Apply',
  },
  {
    image: image2,
    title: 'NEOM - Future of Living: Architectural Design Competition',
    deadline: 'December 15, 2024',
    eligibility: 'Open to Saudi architects',
    buttonText: 'Apply',
  },
  {
    image: image3,
    title: 'Expo 2030 - Future Forward',
    deadline: 'January 15, 2025',
    eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
    buttonText: 'Apply',
  },
  {
    image: image4,
    title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
    deadline: 'October 20, 2024',
    eligibility: 'Open to Saudi tech developers and digital artists',
    buttonText: 'Apply',
  },
  {
    image: image5,
    title: 'FIFA 2034 - Game on',
    deadline: 'March 1, 2025',
    eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
    buttonText: 'Apply',
  }
];

const Projects = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankees-blue mb-10 font-montserrat-medium">
            Projects
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Submit Your Idea
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
          Join Exciting Opportunities
        </p>
        <p className="text-base md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-regular">
          This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
        </p>
      </div>

      {/* Cards in a Horizontal Line */}
      <div className="flex overflow-x-auto space-x-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex w-80 flex-col justify-between border-2 border-gray-200 rounded-lg p-4 bg-white min-h-[300px]">
            <div>
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover mb-2 rounded" />
              <h3 className="text-xl font-montserrat-medium mb-4 text-yankees-blue">{project.title}</h3>
              {/* <p className="mb-2">Deadline: {project.deadline}</p>
              <p className="mb-4">Eligibility: {project.eligibility}</p> */}

              <div className="flex items-start">
                <MdHexagon className="text-red-600 text-sm mr-4 mt-1" />
                <p className="text-yankees-blue font-montserrat-medium">Deadline:</p>
              </div>
              <div >
                <p className="text-yankees-blue ml-8 mb-4 font-montserrat-light">{project.deadline}</p>
              </div>
              
              <div className="flex items-start">
                <MdHexagon className="text-red-600 text-sm mr-4 mt-1" />
                <p className="text-yankees-blue font-montserrat-medium">Eligibility: </p>
              </div>
              <div>
              <p className="text-yankees-blue ml-8 mb-6 font-montserrat-light">{project.eligibility}</p>
              </div>



            </div>
            <div className="mt-auto">
              <button className="w-full px-4 py-2 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white font-montserrat-light">
                {project.buttonText}
              </button>
            </div>
          </div>
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

export default Projects;


