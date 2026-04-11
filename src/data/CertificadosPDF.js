// certificadosData.js
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
import B1English from '../Certificados/InglesB1.pdf';

export const certificados = [
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
  { title: "B1 English Cambridge", link: B1English, tech: "English", gradient: "from-green-400 to-emerald-600" },
];