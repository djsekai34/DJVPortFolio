import { 
  CalendarIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ArrowDownTrayIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

import Animacion from '../Componentes/Animacion.jsx'; 
import fotoDavid from '../Imagenes/FotoDavidJimenez.jpg'; 
import miCV from '../CV/CV_DavidJimenezVillena.pdf';

// --- COMPONENTES DE ICONOS PERSONALIZADOS (SVG) ---
const GamepadIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="6" x2="10" y1="12" y2="12"></line>
    <line x1="8" x2="8" y1="10" y2="14"></line>
    <line x1="15" x2="15.01" y1="13" y2="13"></line>
    <line x1="18" x2="18.01" y1="11" y2="11"></line>
    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
  </svg>
);

const BasketballIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2v20" />
    <path d="M4.93 4.93c2.86 2.86 2.86 7.51 0 10.37" />
    <path d="M19.07 4.93c-2.86 2.86-2.86 7.51 0 10.37" />
  </svg>
);

const SoccerIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m12 12-4-2.5V5M12 12l4-2.5V5M12 12v4.5l-3.5 2.5M12 16.5l3.5 2.5M8 9.5l-4 1M16 9.5l4 1"></path>
  </svg>
);

const DumbbellIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6.5 6.5 11 11"></path>
    <path d="m21 21-1-1"></path>
    <path d="m3 3 1 1"></path>
    <path d="m18 22 4-4"></path>
    <path d="m2 6 4-4"></path>
    <path d="m3 10 7-7"></path>
    <path d="m14 21 7-7"></path>
  </svg>
);

const CarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.3 2 11.7 2 12v4c0 .6.4 1 1 1h2"></path>
    <circle cx="7" cy="17" r="2"></circle>
    <path d="M9 17h6"></path>
    <circle cx="17" cy="17" r="2"></circle>
  </svg>
);

const About = () => {
  // --- INFORMACIÓN PERSONAL Y CONTACTO ---
  const personalInfo = [
    { icon: <CalendarIcon className="h-5 w-5" />, label: "Cumpleaños", value: "15-01-2003" },
    { icon: <PhoneIcon className="h-5 w-5" />, label: "Teléfono", value: "648 823 976", href: "tel:+34648823976" },
    { icon: <EnvelopeIcon className="h-5 w-5" />, label: "Correo", value: "davidjimenezvillena@gmail.com", href: "mailto:davidjimenezvillena@gmail.com" },
    { icon: <MapPinIcon className="h-5 w-5" />, label: "Localidad", value: "Alcalá la Real, Jaén" },
  ];

  // --- LISTADO DE INTERESES / HOBBIES ---
  const interests = [
    { icon: <GamepadIcon className="h-4 w-4" />, name: "Videojuegos" },
    { icon: <BasketballIcon className="h-4 w-4" />, name: "Baloncesto" },
    { icon: <SoccerIcon className="h-4 w-4" />, name: "Fútbol" },
    { icon: <MusicalNoteIcon />, name: "Música" },
    { icon: <DumbbellIcon className="h-4 w-4" />, name: "Gimnasio" },
    { icon: <CarIcon className="h-4 w-4" />, name: "Conducir" },
  ];

  return (
    <Animacion>
      <section id="about" className="pt-16 pb-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* --- SECCIÓN IZQUIERDA: FOTO Y BADGES --- */}
            <div className="lg:col-span-5 relative group flex justify-center">
              <div className="relative w-full max-w-[320px] md:max-w-[340px] lg:max-w-none">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-2xl bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={fotoDavid} 
                    alt="David Jiménez Villena" 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x600?text=David+Jiménez'; }}
                  />
                </div>
                
                {/* ETIQUETA ACADÉMICA FLOTANTE */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-slate-900 p-3 md:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-center min-w-[100px] md:min-w-[120px]">
                  <div className="flex flex-col leading-none">
                    <span className="text-xl md:text-2xl font-black text-indigo-500">SMR</span>
                    <span className="text-xl md:text-2xl font-black text-purple-500">& DAW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECCIÓN DERECHA: TEXTO E INFORMACIÓN --- */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
                  Sobre <span className="text-indigo-500">mí</span>
                </h2>
                <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
              </div>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Hola, soy <span className="text-slate-900 dark:text-white font-bold underline decoration-indigo-500 decoration-4">David Jiménez Villena</span>.
              </p>

              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Currently estoy estudiando el <strong>Curso de Especialización en Desarrollo de videojuegos y realidad virtual</strong> en Jaén. Soy una persona sociable a la que le gusta el trabajo en equipo, con una gran simpatía y que disfruta de los retos.
                </p>
                <p>
                  He estado trabajando de desarrollador web hace no mucho aunque estoy en constante aprendizaje en ese mundo, pero actualmente estoy aprendiendo del mundo de los videojuegos un mundo que me apasiona desde que era un niño. Graduado en <strong>SMR</strong> y en <strong>DAW</strong>.
                </p>
              </div>

              {/* GRID DE DATOS PERSONALES */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {personalInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="text-indigo-500 p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-slate-400">{info.label}</span>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-bold dark:text-slate-200 hover:text-indigo-500 transition-colors">{info.value}</a>
                      ) : (
                        <span className="text-sm font-bold dark:text-slate-200">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* BLOQUE DE INTERESES */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Intereses</h4>
                <div className="flex flex-wrap gap-3">
                  {interests.map((item, i) => (
                    <span key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 border border-transparent hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default">
                      <span className="text-indigo-500 w-4 h-4">{item.icon}</span>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTÓN DE DESCARGA CV */}
              <div className="mt-10">
                <a 
                  href={miCV} 
                  download="CV_DavidJimenezVillena.pdf" 
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animacion>
  );
};

export default About;