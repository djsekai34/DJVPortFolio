// src/Data/ProyectosData.js
import imgAfterbit from "../Imagenes/Afterbit.png";
import imgTfg from "../Imagenes/TFG_Restaurante.png";
import imgCesar from "../Imagenes/CifradoCesar.png";
import imgIntrusion from "../Imagenes/Intrusion.png";

export const misProyectos = [
  {
    id: "Intrusion",
    titulo: "Intrusion",
    descripcion:
      "Página web del videojuego desarrollado durante el curso de especialización en videojuegos y realidad virtual, creado de forma colaborativa por toda la clase, con una temática centrada en el terror y los puzles.",
    imagen: imgIntrusion,
    tecnologias: ["Unity", "C#", "VR"],
    enlaces: {
      github: "https://github.com/IntrusionGame/IntrusionWeb",
      web: "https://intrusiongame.vercel.app/",
    },
    destacado: false,
  },
  {
    id: "afterbit",
    titulo: "Afterbit",
    descripcion:
      "Pagina web de mi empresa del curso de especializacion en videojuegos y VR que contiene todo los juegos que se realizan en el curso mas mi juego final con su GDD.",
    imagen: imgAfterbit,
    tecnologias: ["EmailJS", "React", "Tailwind"],
    enlaces: {
      github: "https://github.com/djsekai34/Afterbit",
      web: "https://djsekai34.github.io/Afterbit/",
    },
    destacado: true,
  },
  {
    id: "tfg",
    titulo: "TFG DAW - Restaurante",
    descripcion:
      "Proyecto fin de grado de un restaurante para el grado superior de DAW. Gestión de pedidos, carta interactiva, panel de administración y cobro con generacion de ticket personalizado en pdf",
    imagen: imgTfg,
    tecnologias: ["PHP", "MySQL", "JavaScript", "HTML"],
    enlaces: {
      github: "https://github.com/djsekai34/Proyecto-TFG-Restaurante",
    },
    destacado: false,
  },
  {
    id: "cesar",
    titulo: "Cifrado César",
    descripcion:
      "Pequeño ejemplo de uso sobre el cifrado cesar uno de los primero cifrados de la historia.",
    imagen: imgCesar,
    tecnologias: ["JavaScript", "HTML", "CSS"],
    enlaces: {
      github: "https://github.com/djsekai34/CifradoCesar",
      web: "https://djsekai34.github.io/CifradoCesar/",
    },
    destacado: false,
  },
];
