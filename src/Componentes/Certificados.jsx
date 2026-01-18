import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/pagination';

// --- SECCIÓN DE IMPORTACIÓN DE CERTIFICADOS ---
import FigmaPDF from '../Certificados/certificado_curso_de_figma.pdf';
import DataFactoryShort from '../Certificados/Certificado_Data_Factory_para Data Egineers.pdf';
import FundamentosJS from '../Certificados/certificado_fundamentos_de_javascript.pdf';
import JSGeneral from '../Certificados/certificado_javascript.pdf';
import AzureDataFactoryFull from '../Certificados/Curso completo de Azure Data Factory para Data Engineers.pdf';
import ETLTesting from '../Certificados/Data Warehouse ETL Testing & Data Quality Management A-Z.pdf';
import DWFundamentals from '../Certificados/Data Warehouse Fundamentals for Beginners.pdf';
import MLPowerBI from '../Certificados/Machine Learning and Artificial Intelligence in Power BI.pdf';
import SSAS from '../Certificados/SQL Server Analysis Services (SSAS) desde 0 hasta Experto.pdf';
import SQLProgramacion from '../Certificados/SQL Server Programando Procedimientos, Triggers y funciones.pdf';

const Certificaciones = () => {
  // --- DEFINICIÓN DE DATOS Y ESTILOS DE CERTIFICADOS ---
  const certificados = [
    { title: "Azure Data Factory (Completo)", link: AzureDataFactoryFull, tech: "Azure", gradient: "from-sky-400 to-blue-600" },
    { title: "Figma: Diseño de Interfaces", link: FigmaPDF, tech: "Figma", gradient: "from-orange-400 to-rose-500" },
    { title: "Fundamentos de JavaScript", link: FundamentosJS, tech: "JS", gradient: "from-yellow-300 to-yellow-500" },
    { title: "JavaScript Avanzado", link: JSGeneral, tech: "JS", gradient: "from-yellow-400 to-orange-500" },
    { title: "Data Factory para Engineers", link: DataFactoryShort, tech: "Azure", gradient: "from-blue-500 to-indigo-600" },
    { title: "Data Warehouse Fundamentals", link: DWFundamentals, tech: "Data", gradient: "from-purple-400 to-indigo-600" },
    { title: "ETL Testing & Data Quality", link: ETLTesting, tech: "ETL", gradient: "from-emerald-400 to-teal-600" },
    { title: "ML & AI en Power BI", link: MLPowerBI, tech: "AI", gradient: "from-rose-400 to-purple-600" },
    { title: "SQL Server: SSAS", link: SSAS, tech: "SQL", gradient: "from-slate-600 to-slate-800" },
    { title: "SQL: Procedimientos y Triggers", link: SQLProgramacion, tech: "SQL", gradient: "from-indigo-500 to-slate-900" },
  ];

  // --- LÓGICA DEL RENDERIZADO DEL BADGE ---
  const renderBadge = (tech, gradient) => (
    <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-lg opacity-20`}></div>
      <div className={`relative w-full h-full bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg border border-white/20`}>
        <span className="text-white font-black text-[9px] tracking-tighter uppercase drop-shadow-md">{tech}</span>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-xl"></div>
      </div>
    </div>
  );

  return (
    <div className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800/50">
      {/* --- CABECERA VISUAL --- */}
      <div className="flex flex-col mb-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-1 w-10 bg-indigo-500 rounded-full"></div>
          <span className="text-indigo-500 font-black text-[10px] uppercase tracking-[0.2em]">Formación Extra</span>
        </div>
        <h3 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
          Certificaciones varias
        </h3>
      </div>

      {/* --- CONFIGURACIÓN Y ESTRUCTURA DEL SWIPER --- */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        // Adaptabilidad del carrusel por ancho de pantalla
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-28 custom-swiper"
      >
        {certificados.map((cert, index) => (
          <SwiperSlide key={index} className="h-auto px-1">
            <div className="group relative p-6 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-800/50 hover:border-indigo-500/50 transition-all duration-300 h-full min-h-[190px] flex flex-col justify-between mb-10 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-4">
                  {renderBadge(cert.tech, cert.gradient)}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors leading-tight">
                  {cert.title}
                </h4>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-colors group/link"
              >
                <span className="relative z-10">Ver documento</span>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover/link:w-full"></div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- ESTILOS CSS INYECTADOS PARA LA PAGINACIÓN --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination { bottom: 20px !important; }
        .swiper-pagination-bullet { 
          width: 8px; height: 8px; background: #94a3b8; opacity: 0.4; transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active { 
          background: #6366f1 !important; width: 24px !important; border-radius: 4px; opacity: 1;
        }
        .dark .swiper-pagination-bullet { background: #475569; }
        .dark .swiper-pagination-bullet-active { background: #818cf8 !important; }
      `}} />
    </div>
  );
};

export default Certificaciones;