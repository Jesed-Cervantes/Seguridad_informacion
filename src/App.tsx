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
          <Link to="/Pagina 2" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 2
            {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Legislación informática, Conceptos de derechos de autor, privacidad y protecciónde datos.</span> */}
          </Link>
          <Link to="/Pagina 3" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 3
            {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Leyes nacionales e internacionales aplicables a los derechos de autor, privacidad y protección de datos, Trámites y requisitos de registro de obras ante la institución de derechos de autor.</span> */}
          </Link>
          <Link to="/Pagina 4" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 4
            {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Proceso de trámite de registro de obras ante la institución de derechos de autor, Proceso de elaboración de avisos de privacidad</span> */}
          </Link>
          <Link to="/Pagina 5" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 5
            {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Ética informática y delitos informáticos, Conceptos de ética y delitos informáticos </span> */}
          </Link>
          <Link to="/Pagina 6" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 6
            {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Características de los delitos informáticos tipificados en México, Aspectos legales relacionados con delitos informáticos en México, Proceso de elaboración de códigos de conducta y ética informática</span> */}
          </Link>
          <Link to="/Pagina 7" className="text-slate-950 flex items-center ">
            <FaFileAlt className="mr-2" /> 
            Pagina 7
            {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Conclusiones y referencias en formato APA</span> */}
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
        <Link to="/Pagina 2" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 2
          {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Legislación informática, Conceptos de derechos de autor, privacidad y protecciónde datos.</span> */}
        </Link>
        <Link to="/Pagina 3" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 3
          {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Leyes nacionales e internacionales aplicables a los derechos de autor, privacidad y protección de datos, Trámites y requisitos de registro de obras ante la institución de derechos de autor.</span> */}
        </Link>
        <Link to="/Pagina 4" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 4
          {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Proceso de trámite de registro de obras ante la institución de derechos de autor, Proceso de elaboración de avisos de privacidad</span> */}
        </Link>
        <Link to="/Pagina 5" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 5
          {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Ética informática y delitos informáticos, Conceptos de ética y delitos informáticos </span> */}
        </Link>
        <Link to="/Pagina 6" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 6
          {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Características de los delitos informáticos tipificados en México, Aspectos legales relacionados con delitos informáticos en México, Proceso de elaboración de códigos de conducta y ética informática</span> */}
        </Link>
        <Link to="/Pagina 7" className="text-slate-950 flex items-center ">
          <FaFileAlt className="mr-2" /> 
          Pagina 7
          {/* <span className="opacity-0 group-hover:opacity-100 absolute top-full mt-2 bg-black text-white text-sm px-1 py-0.5 rounded">Conclusiones y referencias en formato APA</span> */}
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
          <Route path="/Pagina 2" element={<CoverPage2 />} />
          <Route path="/Pagina 3" element={<CoverPage3 />} />
          <Route path="/Pagina 4" element={<CoverPage4 />} />
          <Route path="/Pagina 5" element={<CoverPage5 />} />
          <Route path="/Pagina 6" element={<CoverPage6 />} />
          <Route path="/Pagina 7" element={<CoverPage7 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
