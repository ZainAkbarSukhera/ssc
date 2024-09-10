// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurVision from './components/OurVision';
import OurMission from './components/OurMission';
import Projects from './components/Projects';
import Footer from './components/footer';
import Workshop from './components/Workshop';
import Patrons from './components/Patrons';
import Marketplace from './components/Marketplace';
import Creatives from './components/Creatives';
import CreativeImpact from './components/CreativeImpact';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <OurVision/>
      <OurMission/>
      <Creatives/>
      <Projects/>
      <Marketplace/>
      <Workshop/>
      <Patrons/>
      <CreativeImpact/>
      <Footer/>
    </>
  );
};