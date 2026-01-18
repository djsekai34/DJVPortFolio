import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Animacion from '../Componentes/Animacion.jsx';

const Trabajos = () => {
  // --- LISTADO DE EXPERIENCIA LABORAL ---
  const trabajos = [
    {
      puesto: "Desarrollador Web",
      empresa: "ISP Gestion (Alcalá la Real)",
      periodo: "02/2025 - 08/2025",
      descripcion: "Me dediqué al diseño de páginas web utilizando PrestaShop, WordPress y PHP, lo que me permitió adquirir habilidades en la creación de sitios web funcionales y atractivos. Durante este período, mejoré y aprendí significativamente a programar en Smarty, desarrollando plantillas eficientes y flexibles. También tuve la oportunidad de interactuar con clientes de diferentes sectores, adaptando soluciones personalizadas para cumplir con sus necesidades específicas. Disfruté de un ambiente laboral colaborativo y creativo, donde mi trabajo fue valorado y mi contribución al éxito de cada proyecto fue apreciada.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      puesto: "Becario",
      empresa: "NTTDATA",
      periodo: "04/2024 - 06/2024",
      descripcion: "Desempeñé el rol de becario en NTTDATA, adquiriendo competencias en Power BI, Microsoft Azure, Machine Learning y Azure Data Factory. Hice simulacion de proyectos reales, aplicando mis conocimientos para desarrollar soluciones de datos innovadoras y optimizando procesos de análisis.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      puesto: "Becario",
      empresa: "Forsy",
      period: "04/2022 - 06/2022",
      descripcion: "Desempeñé el rol de becario en Forsy, donde adquiri las comptencias de como reparar un equipo, solucionar fallos de los equipos tambien desmonte y monte equipo e impresoras, ayudando tambien a niños pequeños con la informatica.",
      color: "from-slate-500 to-slate-700"
    }
  ];

  return (
    <Animacion>
      <section id="experience" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* --- CABECERA DE SECCIÓN --- */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
              Mi Trayectoria <span className="text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Profesional</span>
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
          </div>

          {/* --- CONTENEDOR DE LÍNEA DE TIEMPO HORIZONTAL --- */}
          <div className="relative">
            {/* EJE HORIZONTAL (Visible solo en PC) */}
            <div className="absolute top-[20px] left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 hidden lg:block"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
              {trabajos.map((trabajo, index) => (
                <div key={index} className="relative group flex flex-col items-center lg:items-start">
                  
                  {/* INDICADOR CIRCULAR SOBRE LA LÍNEA */}
                  <div className="hidden lg:flex absolute top-[4px] left-0 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-500 items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  </div>

                  {/* CONECTOR VERTICAL (HILO) */}
                  <div className="hidden lg:block absolute top-[32px] left-[15px] w-0.5 h-12 bg-gradient-to-b from-indigo-500 to-transparent opacity-50"></div>

                  {/* TARJETA DE TRABAJO (FLOTANTE) */}
                  <div className="lg:mt-12 relative h-full p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col">
                    
                    {/* CABECERA TARJETA: PUESTO Y EMPRESA */}
                    <div className="flex flex-col mb-6">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${trabajo.color} text-white text-xs font-black uppercase tracking-wider mb-2 w-fit`}>
                        <BriefcaseIcon className="h-3.5 w-3.5" />
                        {trabajo.puesto}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        {trabajo.empresa}
                      </h3>
                    </div>

                    {/* FECHA/PERIODO */}
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-sm bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-700 w-fit mb-6">
                      <CalendarIcon className="h-4 w-4 text-indigo-500" />
                      {trabajo.periodo}
                    </div>

                    {/* DESCRIPCIÓN DE TAREAS */}
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium flex-grow text-sm">
                      {trabajo.descripcion}
                    </p>

                    {/* DETALLE DECORATIVO DE FONDO */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${trabajo.color} opacity-[0.03] rounded-bl-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Animacion>
  );
};

export default Trabajos;