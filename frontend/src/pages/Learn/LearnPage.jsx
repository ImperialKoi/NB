import React, { useState } from 'react';
import AppNavbar from '../App Navbar/AppNavbar'; 
import Sidebar from './components/Sidebar'; 
import Article from './components/Article'; 

const Learn = () => {
  const [activeUnit, setActiveUnit] = useState(1); // Default to Unit 1

  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      {/* Full-width Navbar */}
      <div className='fixed top-0 left-0 w-full z-10'>
        <AppNavbar />
      </div>

      <div className='flex'>
        {/* Sidebar */}
        <Sidebar setActiveUnit={setActiveUnit} />

        {/* Main content (Article section) */}
        <div className="ml-64 mt-32 p-8"> {/* Sidebar width + margin-top to avoid overlap */}
          <Article activeUnit={activeUnit} setActiveUnit={setActiveUnit}/>
        </div>
      </div>
    </div>
  );
};

export default Learn;