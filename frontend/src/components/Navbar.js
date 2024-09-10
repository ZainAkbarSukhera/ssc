// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import logo from '../assets/SCS Logo.png';
// import { FaXmark, FaBars } from 'react-icons/fa6';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   // Set toggle Menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // navItems array
//   const navItems = [
//     { link: 'About', path: 'about' },
//     { link: 'Creatives', path: 'creatives' },
//     { link: 'Projects', path: 'projects' },
//     { link: 'Marketplace', path: 'marketplace' },
//     { link: 'Workshops', path: 'workshops' }
//   ];

//   return (
//     <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
//       <nav className={`py-4 shadow-lg ${isSticky ? "sticky top-0 left-0 right-0 bg-white duration-300" : ""}`}>
//         <div className='flex justify-between items-center text-base gap-8'>
//           <a href="#" className='text-2xl font-semibold flex items-center space-x-3'>
//             <img src={logo} alt="Logo" className='w-10 inline-block items-center' />
//           </a>

//           {/* nav items for large devices */}
//           <ul className='md:flex space-x-12 hidden'>
//             {
//               navItems.map(({ link, path }) => (
//                 <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-yankees-blue first:font-medium'>
//                   {link}
//                 </Link>
//               ))
//             }
//           </ul>

//           {/*button for large devices*/}
//           <div className='space-x-12 hidden lg:flex items-center'>
//           <button className='bg-madder-lake text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Login</button>
//             <button className='bg-fire-opal text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
//           </div>

//           {/* menu button for only mobile devices */}
//           <div className='md:hidden'>
//             <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
//               {
//                 isMenuOpen ? <FaXmark className='h-6 w-6' /> : <FaBars className='h-6 w-6' />
//               }
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* nav items for mobile devices */}
//       <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
//         {
//           navItems.map(({ link, path }) => (
//             <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium'>
//               {link}
//             </Link>
//           ))
//         }
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/SCS Logo.png';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: 'About', path: 'about' },
    { link: 'Creatives', path: 'creatives' },
    { link: 'Projects', path: 'projects' },
    { link: 'Marketplace', path: 'marketplace' },
    { link: 'Workshops', path: 'workshops' }
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : 'bg-transparent'} transition-all duration-300`}>
      <nav className='flex justify-between items-center py-4 px-8'>
        <a href="#" className='flex items-center'>
          <img src={logo} alt="Logo" className='w-20 h-auto' />
        </a>

        {/* Navigation Links for Desktop */}
        <ul className='hidden md:flex space-x-16 items-center text-lg'>
          {navItems.map(({ link, path }) => (
            <Link 
              key={path} 
              to={path} 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className='cursor-pointer text-yankees-blue hover:text-gray-900 font-montserrat-regular'>
              {link}
            </Link>
          ))}
        </ul>

        {/* Authentication Buttons for Desktop */}
        <div className='hidden md:flex space-x-1'>
        <button className='bg-fire-opal text-white py-1 px-8 rounded hover:bg-orange-400 font-montserrat-light'>
            Sign Up
          </button>
          <button className='bg-madder-lake text-white py-1 px-8 rounded hover:bg-red-600 font-montserrat-light'>
            Login
          </button>
          
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className='md:hidden text-gray-700 focus:outline-none'
        >
          {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`space-y-4 px-4 mt-16 py-7 bg-stone-50 ${isMenuOpen ? "block fixed top-10 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link 
              key={path} 
              to={path} 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              onClick={toggleMenu}
              className='block text-base text-gray-700 hover:text-yankees-blue first:font-medium font-montserrat-regular'
            >
              {link}
            </Link>
          ))}
          <div className='space-y-2'>
            <button className='bg-red-600 text-white w-full py-2 rounded hover:bg-red-700'>
              Login
            </button>
            <button className='bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600'>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

