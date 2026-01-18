import { motion } from 'framer-motion';

const PaginaTransicion = ({ children }) => {
  return (
    <motion.div
      // Estado inicial: invisible y desplazado hacia abajo
      initial={{ opacity: 0, y: 10 }}   
      // Estado final: visible en su posición original
      animate={{ opacity: 1, y: 0 }}    
      // Estado al desmontar: desaparece subiendo levemente
      exit={{ opacity: 0, y: -10 }}   
      // Duración y suavizado de la transición
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PaginaTransicion;