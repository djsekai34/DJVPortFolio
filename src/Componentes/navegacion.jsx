import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import miCV from '../CV/CV_DavidJimenezVillena.pdf';

const Navbar = ({ isDark, setIsDark }) => {
  // --- ESTADO LOCAL DEL MENÚ MÓVIL ---
  const [isOpen, setIsOpen] = useState(false);

  // --- CONFIGURACIÓN DE ENLACES DE NAVEGACIÓN ---
  const navLinks = [
    { name: 'Sobre mí', href: '/sobremi' }, 
    { name: 'Estudios', href: '/estudios' }, 
    { name: 'Trabajos', href: '/trabajos' }, 
    { name: 'Proyectos', href: '/proyectos' }, 
    { name: 'Lenguajes', href: '/lenguajes' }, 
    { name: 'Contacto', href: '/contacto' }, 
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- LOGO / HOME --- */}
          <Link to="/" className="flex-shrink-0 flex items-center group cursor-pointer transition-transform duration-300 active:scale-95">
            <div className="relative flex items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-md opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative flex items-baseline">
                <span className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">
                  DJV<span className="text-indigo-500 group-hover:text-pink-500 transition-colors">.</span>
                </span>
                <span className="ml-2 text-lg font-light tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
                  Portfolio
                </span>
              </div>
            </div>
          </Link>

          {/* --- NAVEGACIÓN ESCRITORIO --- */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex space-x-5 mr-2 border-r border-slate-200 dark:border-slate-800 pr-5">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>

            {/* BOTÓN DESCARGA CV */}
            <a
              href={miCV}
              download="CV_DavidJimenezVillena.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              CV
            </a>

            {/* BOTÓN TOGGLE MODO OSCURO */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-2 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-amber-500 dark:text-blue-400 hover:ring-2 ring-indigo-500/50 transition-all"
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          </div>

          {/* --- BOTONES MENÚ MÓVIL --- */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="p-2 text-slate-600 dark:text-slate-300">
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-6 px-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-bold tracking-widest uppercase text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-sm font-bold tracking-widest uppercase text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
          
          {/* CV MÓVIL */}
          <div className="pt-2 w-full flex justify-center">
            <a
              href={miCV}
              download="CV_DavidJimenezVillena.pdf"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;