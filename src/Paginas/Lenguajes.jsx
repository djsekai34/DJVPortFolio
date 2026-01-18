import Animacion from '../Componentes/Animacion.jsx';

import imgPowerBI from '../Imagenes/powerbi.png';
import imgPrestashop from '../Imagenes/prestashop.png';

const Skills = () => {
  // --- DEFINICIÓN DEL STACK TECNOLÓGICO ---
  const habilidades = [
    { nombre: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { nombre: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { nombre: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { nombre: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { nombre: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { nombre: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { nombre: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { nombre: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { nombre: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { nombre: "Power BI", icon: imgPowerBI }, 
    { nombre: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { nombre: "PrestaShop", icon: imgPrestashop }, 
    { nombre: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ];

  return (
    <Animacion>
      <section id="skills" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
          
          {/* --- CABECERA DE LA SECCIÓN --- */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
              Mi <span className="text-indigo-500">Stack</span> Tecnológico
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full mx-auto lg:mx-0 mb-6"></div>
            
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg italic">
              Aquí podrás ver mi stack tecnológico que he usado a lo largo de mi formación y experiencia profesional.
            </p>
          </div>

          {/* --- GRID DE HABILIDADES --- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {habilidades.map((skill, index) => (
              <div key={index} className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                
                {/* ICONO CON EFECTO HOVER */}
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img 
                    src={skill.icon} 
                    alt={skill.nombre} 
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                
                {/* ETIQUETA DE NOMBRE */}
                <span className="font-black text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 tracking-tight text-sm">
                  {skill.nombre}
                </span>

              </div>
            ))}
          </div>
        </div>
      </section>
    </Animacion>
  );
};

export default Skills;