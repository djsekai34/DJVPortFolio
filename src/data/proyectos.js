// src/Data/ProyectosData.js
import imgAfterbit from "../Imagenes/Afterbit.png";
import imgTfg from "../Imagenes/TFG_Restaurante.png";
import imgCesar from "../Imagenes/CifradoCesar.png";
import imgIntrusion from "../Imagenes/Intrusion.png";
import imgAGJ from "../Imagenes/AGJ.png";
import imgUAvanzado from "../Imagenes/UnicajaAvanzado.png";
import { img } from "framer-motion/client";

export const misProyectos = [
  {
    id: "UniAvanzado",
    titulo: "Unicaja Avanzado",
    descripcion:
      "Página web donde podremos conocer estadisticas basicas y avanzadas de los jugadores del Unicaja Baloncesto en la temporada correspondiente, podemos ver graficas de las estadisticas y tambien podemos comparar los jugadores entre si.",
    imagen: imgUAvanzado,
    tecnologias: ["React", "Tailwind", "SupaBase"],
    enlaces: {
      github: "https://github.com/djsekai34/UnicajaAvanzado",
      web: "https://unicajaavanzado.vercel.app/",
    },
    destacado: false,
  },{
    id: "AGJ",
    titulo: "Andalucia Game Jam",
    descripcion:
      "Página web de la Andalucia Game Jam, creada junto a varios compañeros, que introduce el universo de la empresa Eonesia, donde se alojarán videojuegos en HTML. La web y los juegos están ambientados en el Descubrimiento de América, usando esta época histórica como hilo conductor de la experiencia..",
    imagen: imgAGJ,
    tecnologias: ["React", "Tailwind", "html5"],
    enlaces: {
      github: "https://github.com/djsekai34/AGJCristobalColon",
      web: "https://agjelglorioso.vercel.app",
    },
    destacado: false,
  },
  {
    id: "Intrusion",
    titulo: "Intrusion",
    descripcion:
      "Página web del videojuego desarrollado durante el curso de especialización en videojuegos y realidad virtual, creado de forma colaborativa por toda la clase, con una temática centrada en el terror y los puzles la pagina no se pudo finalizar ya que me faltaba imagenes de videojuego que nunca salio por falta de tiempo.",
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
      web: "https://afterbit.vercel.app",
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
