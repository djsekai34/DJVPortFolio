import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/navegacion.jsx';
import Footer from './Componentes/footer.jsx';
import ArribaSiempre from './Componentes/ArribaSiempre.jsx';
import HomePage from './Paginas/Home.jsx';
import SobreMi from './Paginas/SobreMi.jsx';
import Estudios from './Paginas/Estudios.jsx';
import Trabajos from './Paginas/Trabajos.jsx';
import Proyectos from './Paginas/Proyectos.jsx';
import Lenguajes from './Paginas/Lenguajes.jsx';
import Contacto from './Paginas/Contacto.jsx';
import "./index.css";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <ArribaSiempre />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      <main className="flex-grow pt-16"> 
        <Routes>
          <Route path="/" element={<HomePage isDark={isDark} />} />
          <Route path="/sobremi" element={<SobreMi isDark={isDark} />} />
          <Route path="/estudios" element={<Estudios isDark={isDark} />} />
          <Route path="/trabajos" element={<Trabajos isDark={isDark} />} />
          <Route path="/proyectos" element={<Proyectos isDark={isDark} />} />
          <Route path="/lenguajes" element={<Lenguajes isDark={isDark} />} />
          <Route path="/contacto" element={<Contacto isDark={isDark} />} />
        </Routes>
      </main>

      <Footer isDark={isDark} />
      
    </div>
  );
}


export default App;