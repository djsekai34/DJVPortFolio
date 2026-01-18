import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import Animacion from '../Componentes/Animacion.jsx';

const Contacto = () => {
  // --- ESTADOS Y REFERENCIAS ---
  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Campo trampa para bots
  const miEmail = "davidjimenezvillena@gmail.com";

  // --- LÓGICA DE ENVÍO CON EMAILJS ---
  const sendEmail = (e) => {
    e.preventDefault();

    // Validación Anti-Bot
    if (honeypot !== "") {
      setEnviado(true); 
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formRef.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log("Mensaje enviado:", result.text);
        setEnviado(true);
        formRef.current.reset();
        setTimeout(() => setEnviado(false), 5000);
    }, (error) => {
        console.log("Error al enviar:", error.text);
        alert("Hubo un error al enviar el mensaje, por favor inténtalo de nuevo.");
    });
  };

  return (
    <Animacion>
      <section id="contacto" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* --- CABECERA SECCIÓN --- */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
              ¿Hablamos de un <span className="text-indigo-500">Proyecto?</span>
            </h2>
            <div className="w-20 h-1.5 bg-indigo-500 rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* --- BLOQUE IZQUIERDO: CONTACTO DIRECTO --- */}
            <div className="space-y-8">
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
                "Si tienes una idea, una propuesta de colaboración no dudes en contactar conmigo, mi bandeja de entrada está abierta para ti."
              </p>

              <div className="space-y-6">
                <a href={`mailto:${miEmail}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-sm group-hover:bg-indigo-500 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-500 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Escríbeme directamente</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white break-all">{miEmail}</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/david-jimenez-villena/" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-sm group-hover:bg-[#0077b5] transition-all duration-300 border border-slate-100 dark:border-slate-800">
                    <FaLinkedinIn className="h-6 w-6 text-[#0077b5] group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">LinkedIn</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">David Jiménez Villena</p>
                  </div>
                </a>

                <a href="https://github.com/djsekai34" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-sm group-hover:bg-black transition-all duration-300 border border-slate-100 dark:border-slate-800">
                    <FaGithub className="h-6 w-6 text-black dark:text-white group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">GitHub</h4>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">djsekai34</p>
                  </div>
                </a>
              </div>
            </div>

            {/* --- BLOQUE DERECHO: FORMULARIO DE CONTACTO --- */}
            <div className="bg-slate-50 dark:bg-slate-900/40 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                
                {/* TRAMPA HONEYPOT */}
                <div className="hidden">
                  <input 
                    type="text" 
                    value={honeypot} 
                    onChange={(e) => setHoneypot(e.target.value)} 
                    tabIndex="-1" 
                    autoComplete="off" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Nombre</label>
                    <input name="user_name" type="text" placeholder="Tu nombre" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 dark:text-white outline-none font-medium" required />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Email</label>
                    <input name="user_email" type="email" placeholder="tu@email.com" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 dark:text-white outline-none font-medium" required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Asunto</label>
                  <input name="subject" type="text" placeholder="¿De qué trata tu mensaje?" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 dark:text-white outline-none font-medium" required />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-3 ml-1">Mensaje</label>
                  <textarea name="message" rows="4" placeholder="Cuéntame más detalles..." className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-500 dark:text-white outline-none resize-none font-medium" required></textarea>
                </div>
                
                {/* BOTÓN DE ESTADO DINÁMICO */}
                <button 
                  type="submit"
                  disabled={enviado}
                  className={`w-full py-5 font-black rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest ${enviado ? 'bg-green-500 text-white' : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-500/30 hover:scale-[1.02] active:scale-95'}`}
                >
                  {enviado ? (
                    <>
                      <CheckCircleIcon className="h-5 w-5" />
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    <>
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                      Enviar Propuesta
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Animacion>
  );
};

export default Contacto;