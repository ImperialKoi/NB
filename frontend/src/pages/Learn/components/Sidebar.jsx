import React from 'react';

const Sidebar = ({ setActiveUnit }) => {
  return (
    <div className="fixed top-16 left-0 h-full w-64 bg-orange-100 shadow-lg z-20 mt-4"> {/* top-16 to position below AppNavbar */}
      <nav className="flex flex-col p-4 space-y-6">
        <h2 className="text-xl font-bold text-gray-700 ml-12">Course Units</h2>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(1)}
        >
          Unit 1: Variables
        </button>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(3)}
        >
          Unit 2: Basic Functions
        </button>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(5)}
        >
          Unit 3: Loops and Conditionals
        </button>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(7)}
        >
          Unit 4: Lists, Arrays and Dictionarys
        </button>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(9)}
        >
          Unit 5: Functions
        </button>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(11)}
        >
          Unit 6: Libaries
        </button>
        <button
          className="text-black hover:bg-orange-300 bg-orange-200"
          onClick={() => setActiveUnit(13)}
        >
          Final Exam
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;