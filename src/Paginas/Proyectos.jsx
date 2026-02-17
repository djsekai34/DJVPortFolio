import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Animacion from '../Componentes/Animacion.jsx';

import imgAfterbit from '../Imagenes/Afterbit.png';
import imgTfg from '../Imagenes/TFG_Restaurante.png';
import imgCesar from '../Imagenes/CifradoCesar.png';

const Proyectos = () => {
  // --- CONFIGURACIÓN DE DATOS DE PROYECTOS ---
  const misProyectos = [
    {
      id: "afterbit",
      titulo: "Afterbit",
      descripcion: "Pagina web de mi empresa del curso de especializacion en videojuegos y VR que contiene todo los juegos que se realizan en el curso mas mi juego final con su GDD.",
      imagen: imgAfterbit,
      tecnologias: ["Unity", "C#", "VR"],
      enlaces: {
        github: "https://github.com/djsekai34/Afterbit",
        web: "https://afterbit.vercel.app"
      },
      destacado: true
    },
    {
      id: "tfg",
      titulo: "TFG DAW - Restaurante",
      descripcion: "Proyecto fin de grado de un restaurante para el grado superior de DAW. Gestión de pedidos, carta interactiva, panel de administración y cobro con generacion de ticket personalizado en pdf",
      imagen: imgTfg,
      tecnologias: ["PHP", "MySQL", "JavaScript", "HTML"],
      enlaces: {
        github: "https://github.com/djsekai34/Proyecto-TFG-Restaurante"
      },
      destacado: false
    },
    {
      id: "cesar",
      titulo: "Cifrado César",
      descripcion: "Pequeño ejemplo de uso sobre el cifrado cesar uno de los primero cifrados de la historia.",
      imagen: imgCesar,
      tecnologias: ["JavaScript", "HTML", "CSS"],
      enlaces: {
        github: "https://github.com/djsekai34/CifradoCesar",
        web: "https://djsekai34.github.io/CifradoCesar/"
      },
      destacado: false
    }
  ];

  return (
    <Animacion>
      <section id="proyectos" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* --- CABECERA DE LA SECCIÓN --- */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
              Mis <span className="text-indigo-500">Proyectos</span>
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
          </div>

          {/* --- GRID DE PROYECTOS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {misProyectos.map((proy, index) => (
              <div key={index} className="group flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500">
                
                {/* IMAGEN Y BADGE */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img 
                    src={proy.imagen} 
                    alt={proy.titulo}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    style={{ objectPosition: proy.id === 'cesar' ? '50% 0%' : 'center center' }}
                  />
                  {proy.destacado && (
                    <div className="absolute top-4 right-4 z-20 bg-indigo-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      Especialización
                    </div>
                  )}
                </div>

                {/* INFORMACIÓN DEL PROYECTO */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proy.tecnologias.map((tech, i) => (
                      <span key={i} className="text-[10px] font-black uppercase px-2 py-1 bg-white dark:bg-slate-800 text-indigo-500 rounded-md border border-slate-100 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">
                    {proy.titulo}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm mb-8 flex-grow">
                    {proy.descripcion}
                  </p>

                  {/* BOTONES DE ACCIÓN PARA GITHUB O PAGINA WEB */}
                  <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                    {proy.enlaces.github && (
                      <a href={proy.enlaces.github} target="_blank" rel="noreferrer" 
                        className={`flex items-center justify-center gap-2 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-bold hover:scale-105 transition-transform 
                        ${proy.enlaces.web ? 'w-1/2' : 'w-full'}`}>
                        <CodeBracketIcon className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    
                    {proy.enlaces.web && (
                      <a href={proy.enlaces.web} target="_blank" rel="noreferrer" 
                        className={`flex items-center justify-center gap-2 py-2.5 bg-indigo-500 text-white rounded-xl text-xs font-bold hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20 
                        ${proy.enlaces.github ? 'w-1/2' : 'w-full'}`}>
                        <GlobeAltIcon className="h-4 w-4" />
                        Página Web
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Animacion>
  );
};

export default Proyectos;