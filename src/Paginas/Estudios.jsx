import { AcademicCapIcon, RocketLaunchIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Animacion from '../Componentes/Animacion.jsx';
import Certificaciones from '../Componentes/Certificados.jsx';

const Education = () => {
  // --- LISTADO DE ESTUDIOS Y TRAYECTORIA ACADÉMICA ---
  const studies = [
    {
      title: "Curso de especialización en videojuegos y realidad virtual",
      institution: "IES Virgen del Carmen (Jaén)",
      period: "2025 - actualidad",
      description: "Actualmente me encuentro estudiando el Curso de Especialización en Videojuegos y Realidad Virtual, donde estoy profundizando en el desarrollo de experiencias interactivas y entornos inmersivos. Durante la formación estoy aprendiendo a programar en C#, aplicando conceptos fundamentales y avanzados orientados al desarrollo de videojuegos. Además, estoy creando proyectos desde cero utilizando Unity, lo que me permite trabajar en todos los aspectos del proceso: desde el diseño de mecánicas y la lógica de juego, hasta la creación de interfaces, animaciones y sistemas de interacción en 2D y 3D. Este curso está reforzando mis habilidades técnicas y creativas",
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      current: true
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      institution: "IES Alfonso XI (Alcalá la Real, Jaén)",
      period: "2022 - 2024",
      description: "Adquirí competencias avanzadas en desarrollo de aplicaciones web, aprendiendo a utilizar lenguajes de programación como Java, Javascript, PHP, HTML y CSS. También desarrolló habilidades en bases de datos, diseño de interfaces de usuario, Microsoft Azure, Maching Learning y Azure data Factory.",
      icon: <AcademicCapIcon className="h-6 w-6" />,
      current: false
    },
    {
      title: "Técnico en Sistemas Microinformáticos y Redes",
      institution: "IES Alfonso XI (Alcalá la Real, Jaén)",
      period: "2020 - 2022",
      description: "Durante mi formación como Técnico en Sistemas Microinformáticos y Redes, adquirí competencias en instalación, configuración y mantenimiento de sistemas informáticos y redes. Desarrollé habilidades en diagnóstico y reparación de hardware, así como en la gestión de software y seguridad de la información. También aprendí como montar una red informática en un edificio con su presupuesto etc.",
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      current: false
    }
  ];

  return (
    <Animacion>
      <section id="education" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* --- CABECERA SECCIÓN --- */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
              Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Estudios</span>
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
          </div>

          {/* --- LÍNEA DE TIEMPO --- */}
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-slate-200 dark:before:to-slate-800">
            {studies.map((study, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                
                {/* ICONO INDICADOR EJE CENTRAL */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 ${
                  study.current ? 'bg-indigo-500 text-white scale-110 shadow-indigo-500/50' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {study.icon}
                </div>

                {/* TARJETA DE ESTUDIO */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-500/10 transition-all duration-300 group-hover:-translate-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-1 block">{study.period}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{study.title}</h3>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 italic">{study.institution}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-pretty">{study.description}</p>
                  
                  {/* BADGE ESTADO ACTUAL */}
                  {study.current && (
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-tighter">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
                      Actualidad
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* --- CARRUSEL DE CERTIFICADOS --- */}
          <Certificaciones />
        </div>
      </section>
    </Animacion>
  );
};

export default Education;