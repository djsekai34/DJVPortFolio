import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Animacion from '../Componentes/Animacion.jsx'; 

const Home = () => {
  return (
    <Animacion>
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden -mt-16">
        
        {/* --- ELEMENTOS DECORATIVOS DE FONDO  --- */}
        <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          {/* --- BADGE DE ESPECIALIDADES --- */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="text-[10px] font-black tracking-widest uppercase text-indigo-500">Front end</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="text-[10px] font-black tracking-widest uppercase text-purple-500">Unity</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
            <span className="text-[10px] font-black tracking-widest uppercase text-pink-500">Back end</span>
          </div>

          {/* --- TÍTULO PRINCIPAL --- */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-900 dark:text-white">
            Junior Web & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Game Developer 
            </span>
          </h1>

          {/* --- DESCRIPCIÓN --- */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
            Soy <span className="text-slate-900 dark:text-white font-bold">David</span>, un desarrollador web junior y desarrollador de videojuegos junior, no dudes en mirar mi portfolio y contactar conmigo.
          </p>

          {/* --- BOTONES DE ACCIÓN --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/DJVPortFolio/proyectos" 
              className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-xl shadow-indigo-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Mirar mis Proyectos
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="/DJVPortFolio/contacto" 
              className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-indigo-500 transition-colors border-b-2 border-transparent hover:border-indigo-500 pb-1"
            >
              Contactar conmigo
            </a>
          </div>
        </div>

        {/* --- DETALLES DE DISEÑO LATERAL --- */}
        <div className="absolute hidden lg:block left-10 top-1/2 -translate-y-1/2 space-y-4 opacity-20">
          <div className="w-1 h-12 bg-slate-400 rounded-full"></div>
          <div className="w-1 h-24 bg-gradient-to-b from-slate-400 to-indigo-500 rounded-full"></div>
          <div className="w-1 h-12 bg-indigo-500 rounded-full"></div>
        </div>
      </section>
    </Animacion>
  );
};

export default Home;