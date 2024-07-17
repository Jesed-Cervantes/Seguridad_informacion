import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CoverPage from "./pages/Pagina1";
import CoverPage2 from "./pages/Pagina2";
import CoverPage3 from "./pages/Pagina3";
import CoverPage4 from "./pages/Pagina4";
import CoverPage5 from "./pages/Pagina5";
import CoverPage6 from "./pages/Pagina6";
import CoverPage7 from "./pages/Pagina7";
import { FaBars, FaTimes, FaHome, FaFileAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4 items-center mx-auto rounded-full border-4 border-green-600 border-t-0 border-r-0 border-l-0 p-2">
          <Link to="/" className="text-slate-950 flex items-center">
            <FaHome className="mr-2" /> Inicio
          </Link>
          <Link to="/Pagina2" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 2
          </Link>
          <Link to="/Pagina3" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 3
          </Link>
          <Link to="/Pagina4" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 4
          </Link>
          <Link to="/Pagina5" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 5
          </Link>
          <Link to="/Pagina6" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 6
          </Link>
          <Link to="/Pagina7" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 7
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-green-500 focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} space-y-3 rounded-lg p-2 border-4 border-green-600 border-t-0 border-b-0 border-r-0`}>
        <Link to="/" className="text-slate-950 flex items-center">
          <FaHome className="mr-2" /> Inicio
        </Link>
        <Link to="/Pagina2" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 2
        </Link>
        <Link to="/Pagina3" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 3
        </Link>
        <Link to="/Pagina4" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 4
        </Link>
        <Link to="/Pagina5" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 5
        </Link>
        <Link to="/Pagina6" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 6
        </Link>
        <Link to="/Pagina7" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 7
        </Link>
      </div>
    </nav>

  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className='mt-5'>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/Pagina2" element={<CoverPage2 />} />
          <Route path="/Pagina3" element={<CoverPage3 />} />
          <Route path="/Pagina4" element={<CoverPage4 />} />
          <Route path="/Pagina5" element={<CoverPage5 />} />
          <Route path="/Pagina6" element={<CoverPage6 />} />
          <Route path="/Pagina7" element={<CoverPage7 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
