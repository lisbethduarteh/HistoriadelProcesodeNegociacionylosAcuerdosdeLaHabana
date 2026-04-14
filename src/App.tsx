/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  HelpCircle, 
  Lightbulb, 
  Settings2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Pin,
  GraduationCap as GradIcon,
  BookOpen,
  Mic,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TabId = 'intro' | 'paz' | 'metodo' | 'fallidos' | 'resultados' | 'conclusiones' | 'difusion';

interface ModalState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  caption: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro');
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    caption: ''
  });

  const openModal = (images: string[], caption: string = '') => {
    setModal({
      isOpen: true,
      images,
      currentIndex: 0,
      caption
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const tabs: { id: TabId; label: string }[] = [
    { id: 'intro', label: '1. Introducción' },
    { id: 'paz', label: '2. Investigación para la paz' },
    { id: 'metodo', label: '3. Diseño metodológico' },
    { id: 'fallidos', label: '4. Procesos fallidos' },
    { id: 'resultados', label: '5. Resultados' },
    { id: 'conclusiones', label: '6. Conclusiones' },
    { id: 'difusion', label: '7. Difusión científica' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-ugr-blue text-white py-3 px-6 text-sm flex justify-between items-center shadow-sm relative z-50">
        <div className="font-semibold tracking-wider uppercase">Universidad de Granada</div>
        <div className="hidden md:block opacity-80 text-xs">Facultad de Ciencias Políticas y Sociología</div>
      </div>

      {/* Hero Header */}
      <header className="relative border-b border-slate-200 py-12 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-[center_98%] bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/academic/1920/1080")' }}
        />
        <div className="absolute inset-0 bg-white/90 z-1" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight"
          >
            De la guerra a la paz con ayuda de todos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-700 font-light italic mb-12 max-w-4xl mx-auto"
          >
            Historia del proceso de negociación y los Acuerdos De Paz De La Habana (2012-2016)
          </motion.p>
          
          <div className="flex flex-col items-center border-t border-slate-200 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 md:gap-x-16 gap-y-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full border-2 border-white shadow-xl overflow-hidden shrink-0 bg-slate-100">
                  <img 
                    src="https://picsum.photos/seed/portrait/200/200" 
                    alt="Lisbeth Katherine Duarte Herrera" 
                    className="w-full h-full object-cover object-center scale-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-blue-900 mb-0.5">Doctoranda</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-slate-800 font-normal leading-tight">Lisbeth Katherine Duarte Herrera</span>
                    <GradIcon className="w-5 h-5 text-blue-900 shrink-0" />
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-10 w-px bg-slate-300" />
              <div className="text-left py-1">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500 mb-0.5">Director de Tesis</span>
                <span className="block text-xl text-slate-800 font-normal leading-tight">Dr. Mario López Martínez</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-10 px-6 py-1.5 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-blue-900" />
              <span className="font-semibold text-slate-800 tracking-wide text-sm">Granada, 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center whitespace-nowrap gap-4 md:gap-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-1 transition-all duration-300 border-b-2 ${
                  activeTab === tab.id 
                    ? 'text-peace-blue border-peace-blue' 
                    : 'text-slate-400 border-transparent hover:text-peace-blue'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'intro' && <Introduction />}
            {activeTab === 'paz' && <PeaceResearch />}
            {activeTab === 'metodo' && <Methodology openModal={openModal} />}
            {activeTab === 'fallidos' && <SectionPlaceholder title="Procesos fallidos" />}
            {activeTab === 'resultados' && <SectionPlaceholder title="Resultados" />}
            {activeTab === 'conclusiones' && <SectionPlaceholder title="Conclusiones" />}
            {activeTab === 'difusion' && <ScientificDiffusion />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-ugr-blue text-slate-300 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <p className="text-white font-bold text-xl mb-2 italic tracking-wide">"De la guerra a la paz con ayuda de todos"</p>
            <p className="text-sm opacity-80 uppercase tracking-tighter">Lisbeth Katherine Duarte Herrera | Universidad de Granada | 2026</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {modal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center p-4 md:p-10 backdrop-blur-lg"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors bg-white/10 p-2 rounded-full z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            {modal.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors bg-white/5 p-3 rounded-full"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition-colors bg-white/5 p-3 rounded-full"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}

            <div className="max-w-6xl w-full h-full flex flex-col items-center justify-center">
              <motion.img 
                key={modal.currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={modal.images[modal.currentIndex]} 
                alt="Detalle Metodológico" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/70 mt-6 text-sm font-medium tracking-wide uppercase">
                {modal.caption} {modal.images.length > 1 ? `(${modal.currentIndex + 1}/${modal.images.length})` : ''}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Introduction() {
  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">Introducción</h2>
      <div className="space-y-12">
        <div>
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" /> Pregunta Problema
          </h3>
          <p className="text-xl text-slate-700 italic border-l-4 border-blue-200 pl-6 py-2">
            ¿Cuáles son los factores que contribuyeron y dificultaron el curso del proceso de negociación de paz entre el Estado colombiano y las FARC-EP durante el periodo 2012-2016, así como la firma del Acuerdo final de paz de La Habana?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="md:pt-8 lg:pt-10">
            <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-4">Objetivo General</h3>
            <p className="text-slate-600 text-justify text-sm leading-relaxed">
              Analizar los factores que contribuyeron y dificultaron el proceso de negociación de paz entre el Estado colombiano y las FARC-EP durante el periodo 2012-2016, a la luz de las teorías de resolución de conflictos de modo que su estudio permita identificar lecciones aprendidas útiles para futuros procesos.
            </p>
          </div>
          <div>
            <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-4">Objetivos Específicos</h3>
            <ul className="text-[13px] text-slate-600 space-y-3 list-none pl-0">
              <li><span className="font-bold text-blue-900">OE1.</span> Relatar el “periodo de la violencia” en Colombia desde 1964 hasta 2016 a partir de las causas, actores, demanda y dinámica del conflicto armado.</li>
              <li><span className="font-bold text-blue-900">OE2.</span> Describir los procesos de paz fallidos (1982, 1991 y 1999) y los factores que configuraron la madurez del conflicto in 2012.</li>
              <li><span className="font-bold text-blue-900">OE3.</span> Identificar ventanas de oportunidad, rol de actores, agenda y lecciones desde la teoría de resolución de conflictos (2012-2016).</li>
              <li><span className="font-bold text-blue-900">OE4.</span> Revisar cómo los seis puntos del Acuerdo inciden en la terminación del conflicto y en una paz estable y duradera.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6 border-b border-slate-100 pb-2">Supuestos de la Investigación</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="assumption-box">
              <span className="block text-blue-900 font-bold text-sm mb-2">S1. “Diseño y agenda”</span>
              <p className="text-[13px] text-slate-600 text-justify">La existencia de una agenda previamente definida, sustantiva y procedimentalmente ordenada, orienta el desarrollo de las conversaciones, reduce ambigüedades y favorece la consecución de acuerdos durante la negociación.</p>
            </div>
            <div className="assumption-box">
              <span className="block text-blue-900 font-bold text-sm mb-2">S2. “Territorio neutral y reglas de juego”</span>
              <p className="text-[13px] text-slate-600 text-justify">La realización de las conversaciones en un territorio neutral, con reglas de funcionamiento estables, contribuye a la continuidad del diálogo y culminación de la negociación.</p>
            </div>
            <div className="assumption-box">
              <span className="block text-blue-900 font-bold text-sm mb-2">S3. “Dinámica de participación y legitimidad procesual”</span>
              <p className="text-[13px] text-slate-600 text-justify">La pluralidad y la interacción estructurada de actores relevantes (delegaciones, equipos técnicos, víctimas y representantes sociales), fortalece la legitimidad de la negociación y amplía el espacio de intercambios posibles.</p>
            </div>
            <div className="assumption-box">
              <span className="block text-blue-900 font-bold text-sm mb-2">S4. “Acompañamiento y garantías internacionales”</span>
              <p className="text-[13px] text-slate-600 text-justify">La presencia activa de países garantes y acompañantes, así como de organismos internacionales, provee incentivos de cumplimiento procesal, gestión de confianza y verificación de entendimientos durante la negociación.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeaceResearch() {
  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">La Investigación para la paz</h2>
      
      <div className="space-y-12">
        <div>
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">Evolución de la Disciplina</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="p-5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col h-full">
              <div className="mb-4">
                <span className="block font-bold text-blue-900 text-xl">Fundacional</span>
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-tighter">1930 - 1959</span>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Características</span>
                  <ul className="text-[14px] text-slate-600 space-y-1 list-disc pl-3 leading-snug">
                    <li>Enfoque minimalista</li>
                    <li>Ausencia de violencia directa</li>
                    <li>Estudio de la guerra</li>
                  </ul>
                </div>
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Enfoque de Paz</span>
                  <span className="text-[15px] font-medium text-blue-700">Paz Negativa</span>
                </div>
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Exponentes</span>
                  <p className="text-[14px] text-slate-700 font-semibold italic">Quincy Wright, Lewis Richardson</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-blue-50/50 rounded-lg border border-blue-100 flex flex-col h-full shadow-sm">
              <div className="mb-4">
                <span className="block font-bold text-blue-900 text-xl">Expansión</span>
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-tighter">1960 - 1990</span>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Características</span>
                  <ul className="text-[14px] text-slate-600 space-y-1 list-disc pl-3 leading-snug">
                    <li>Enfoque intermedio</li>
                    <li>Ausencia de violencia estructural</li>
                    <li>Realización de necesidades básicas</li>
                  </ul>
                </div>
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Enfoque de Paz</span>
                  <span className="text-[15px] font-medium text-blue-700">Paz Positiva</span>
                </div>
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Exponentes</span>
                  <p className="text-[14px] text-slate-700 font-semibold italic">Johan Galtung, John Lederach</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50/50 rounded-lg border border-blue-100 flex flex-col h-full shadow-sm">
              <div className="mb-4">
                <span className="block font-bold text-blue-900 text-xl">Hibridación</span>
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-tighter">1991 - Actualidad</span>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Características</span>
                  <ul className="text-[14px] text-slate-600 space-y-1 list-disc pl-3 leading-snug">
                    <li>Enfoque maximalista</li>
                    <li>Ausencia de violencia cultural</li>
                    <li>Educación para la paz</li>
                  </ul>
                </div>
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Enfoque de Paz</span>
                  <span className="text-[15px] font-medium text-blue-700">Paz Imperfecta</span>
                </div>
                <div>
                  <span className="block text-[12px] uppercase font-bold text-slate-400 mb-1">Exponentes</span>
                  <p className="text-[14px] text-slate-700 font-semibold italic leading-snug">Francisco Muñoz, Vicenç Fisas</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50/50 rounded-lg border border-blue-100 flex flex-col h-full shadow-sm">
              <div className="mb-4">
                <span className="block font-bold text-blue-900 text-xl leading-tight">Otros enfoques</span>
              </div>
              <div className="space-y-4 flex-grow">
                <p className="text-[13px] text-slate-600 leading-snug text-justify">
                  Emergencia de paradigmas que desafían las hegemonías. <span className="text-blue-700 font-semibold italic">Paz feminista, Paz gaia, Paz indígena, Paz poscolonial</span>. Amplían miradas hacia la justicia social y ecología.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[11px] text-slate-400 italic">Fuente: (Martínez, Comins, & París, 2009); (López Becerra, 2011); (Jimenéz Bautista & Jimenéz Aguilar, 2014); (Harto de Vera, 2016).</p>
          </div>
        </div>

        <div className="pt-6">
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">Teorías de Resolución de Conflictos</h3>
          <p className="text-slate-700 font-bold text-lg mb-8 border-l-4 border-blue-400 pl-4">Anatomía tridimensional del conflicto: El Triángulo de Galtung y sus raíces invisibles</p>
          
          <div className="technical-blueprint">
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex flex-col gap-12">
                <div className="node-box">
                  <span className="node-tag text-blue-400">Nodo A: Actitudes (Presunciones)</span>
                  <div className="text-sm leading-relaxed text-slate-300">
                    <p className="mb-2"><span className="node-sub-label">Concepto:</span> Cómo se perciben las partes recíprocamente.</p>
                    <p className="mb-2 font-bold text-blue-300 italic">Anclaje: Violencia Cultural</p>
                    <p><span className="node-sub-label">Colombia:</span> Polarización social y semblanza recíproca entre guerrilla y Estado.</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4 flex flex-col items-center gap-4">
                <div className="node-box border-orange-400/40 bg-orange-400/10 w-full mb-4">
                  <span className="node-tag text-orange-400">Nodo B: Comportamiento (Conducta)</span>
                  <div className="text-sm leading-relaxed text-slate-300">
                    <p className="mb-1"><span className="node-sub-label">Concepto:</span> Cooperación o confrontación, amenazas y ataques destructivos.</p>
                    <p className="font-bold text-orange-200 italic mb-1">Anclaje: Violencia Directa</p>
                    <p><span className="node-sub-label">Colombia:</span> Escalamiento y desescalamiento táctico-militar.</p>
                  </div>
                </div>
                
                <svg viewBox="0 0 200 200" className="w-full h-auto max-w-[320px] drop-shadow-[0_0_20px_rgba(14,165,233,0.2)] overflow-visible">
                  <path d="M100 10 L140 70 L60 70 Z" fill="#fb923c" fillOpacity="0.8" />
                  <path d="M100 10 L115 70 L85 70 Z" fill="#fdba74" />
                  <text x="100" y="5" fill="#fb923c" fontSize="12" fontWeight="900" textAnchor="middle">B</text>
                  <line x1="10" y1="75" x2="190" y2="75" stroke="white" strokeWidth="1.5" strokeDasharray="6,4" />
                  <path d="M60 80 L140 80 L170 170 L30 170 Z" fill="#0ea5e9" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1" />
                  <circle cx="30" cy="170" r="4" fill="#38bdf8" />
                  <circle cx="170" cy="170" r="4" fill="#38bdf8" />
                  <text x="20" y="185" fill="#38bdf8" fontSize="12" fontWeight="900" textAnchor="middle">A</text>
                  <text x="180" y="185" fill="#38bdf8" fontSize="12" fontWeight="900" textAnchor="middle">C</text>
                  <path d="M100 10 L30 170 L170 170 Z" fill="none" stroke="white" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.4" />
                </svg>
              </div>
              
              <div className="md:col-span-4 flex flex-col gap-12">
                <div className="node-box">
                  <span className="node-tag text-blue-400">Nodo C: Contradicción (Incompatibilidad)</span>
                  <div className="text-sm leading-relaxed text-slate-300">
                    <p className="mb-2"><span className="node-sub-label">Concepto:</span> Desajuste estructural, necesidades básicas insatisfechas.</p>
                    <p className="mb-2 font-bold text-blue-300 italic">Anclaje: Violencia Estructural</p>
                    <p><span className="node-sub-label">Colombia:</span> Exclusión política histórica, injusticia social y control de tierras.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-end">
              <div className="bg-emerald-900/40 border border-emerald-500/20 p-4 rounded-lg max-w-sm">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-emerald-300 shrink-0" />
                  <div>
                    <span className="block font-black text-emerald-300 text-[10px] uppercase tracking-widest mb-1">Core Insight</span>
                    <p className="text-[11px] leading-relaxed text-emerald-50">
                      Centrarse solo en Actitudes (A) genera educación; centrarse solo en Comportamiento (B) crea treguas frágiles; ignorar Contradicciones (C) perpetúa la desigualdad estructural.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-[11px] text-slate-400 italic">Fuente: (Calderón Concha, 2009); (Ramsbotham, Woodhouse, & Miall, 2011)</p>
          </div>
        </div>

        <div className="mt-14 mb-8">
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">TÉCNICAS DE MANEJO DE CONFLICTOS</h3>
          <div className="technical-blueprint pb-8">
            <div className="mb-10 text-center">
              <h4 className="text-lg font-bold mb-1">Espectro de Intervención</h4>
              <p className="text-xs text-slate-400 uppercase tracking-tighter">Criterios tácticos de gestión</p>
            </div>
            <div className="relative mb-12">
              <div className="spectrum-bar">
                <div className="spectrum-point" style={{ left: '10%' }} />
                <div className="spectrum-point" style={{ left: '30%' }} />
                <div className="spectrum-point" style={{ left: '50%' }} />
                <div className="spectrum-point" style={{ left: '70%' }} />
                <div className="spectrum-point highlight" style={{ left: '90%' }} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <TechniqueCard title="Negociación" desc="Choque de intereses gestionado mediante diálogo bidireccional." />
              <TechniqueCard title="Mediación" desc="Tercero imparcial facilita el proceso. Resultado no vinculante." />
              <TechniqueCard title="Conciliación" desc="Tercero propone soluciones activamente. Regulada por normas jurídicas." />
              <TechniqueCard title="Técnicas Mixtas" desc="Abordaje modular. Combina diálogo y decisión autoritativa." />
              <TechniqueCard title="Arbitraje" desc="Tercero asume control total y emite laudo vinculante exigible." special />
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-[11px] text-slate-400 italic">Fuente: (Watzlawick et al., 1991); (Fisas V., 1998); (Ramsbotham et al., 2011).</p>
          </div>
        </div>

        <div className="mt-14 mb-8">
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">MADUREZ DEL CONFLICTO</h3>
          <p className="mt-4 text-slate-600 text-[13px] text-justify leading-relaxed italic border-l-4 border-slate-200 pl-4">
            “(Mutually Hurting Stalemate), refiere a la percepción de las partes en conflicto de estar en un empate en la capacidad de hacerse daño de estar estancados y de que a partir de esta percepción se vislumbra una posible salida” (Fisas V. , 2004, pág. 97)
          </p>
          
          <div className="technical-blueprint pt-10 pb-4 px-8 mt-8">
            <div className="mb-6 text-center">
              <h4 className="text-lg font-bold mb-1">Cuadrantes de Madurez</h4>
              <p className="text-xs text-slate-400 uppercase tracking-tighter">Modelos diagnósticos de negociación</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Quadrant 
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 10l5-3 4 4 4-2 5 4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="21" cy="14" r="1" fill="currentColor"/></svg>}
                title="Catástrofe Mutua Inminente"
                text="Amenaza grave a corto plazo con aumento dramático de costos. Requiere auto-examen urgente."
              />
              <Quadrant 
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/><path d="m19.07 4.93-1.41 1.41M6.34 17.66l-1.41 1.41M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41"/></svg>}
                title="Oportunidad Tentadora"
                text="Líderes descubren alternativas superiores (ej. reparto de poder) impulsados por cambios externos."
                highlight="emerald"
              />
              <Quadrant 
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9M15 21V9M3 15h18"/></svg>}
                title="Estancamiento Perjudicial (Meseta)"
                text="Hurting stalemate. Empate absoluto en capacidad de daño. Costos inaguantables sin ventaja."
              />
              <Quadrant 
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>}
                title="Trampa de Victoria"
                text="Atrapados en búsqueda de victoria total. Madura solo cuando se abandona el sacrificio heroico."
                highlight="orange"
              />
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-[11px] text-slate-400 italic">Fuente: (Zartman, 1985) (Mitchell, 1996) (Fisas V. , 2004)</p>
          </div>
        </div>

        <div className="mt-14 mb-8">
          <h3 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-6">FASES DE UN PROCESO DE PAZ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative mt-8">
            <div className="paradigm-box">
              <span className="font-black uppercase text-lg tracking-wider text-slate-800">EL MITO:<br/>PAZ LINEAL</span>
              <div className="h-[120px] flex items-center justify-center border-b border-slate-200 pb-4">
                <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                  <line x1="10" y1="30" x2="155" y2="30" stroke="#94a3b8" strokeWidth="3" />
                  <circle cx="20" cy="30" r="4" fill="#64748b" />
                  <circle cx="50" cy="30" r="4" fill="#64748b" />
                  <circle cx="80" cy="30" r="4" fill="#64748b" />
                  <circle cx="110" cy="30" r="4" fill="#64748b" />
                  <circle cx="140" cy="30" r="4" fill="#64748b" />
                  <g transform="translate(155, 12) scale(0.65)">
                    <path d="M0,5 L12,5 L15,10 L15,25 L12,30 L0,30 Z" fill="#94a3b8" />
                    <path d="M50,5 L38,5 L35,10 L35,25 L38,30 L50,30 Z" fill="#1e293b" />
                    <path d="M15,10 C20,5 30,5 35,10 L35,25 C30,30 20,30 15,25 Z" fill="#cbd5e1" stroke="#1e293b" strokeWidth="1.5" />
                    <line x1="25" y1="8" x2="25" y2="27" stroke="#1e293b" strokeWidth="1" />
                    <path d="M-5,-5 L55,40 M55,-5 L-5,40" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <p className="text-[13px] text-slate-600 text-justify">La creencia de que la paz es simplemente la ausencia de violencia directa y culmina en la firma de un acuerdo.</p>
            </div>

            <div className="paradigm-box reality shadow-xl">
              <span className="font-black uppercase text-lg tracking-wider text-slate-800">LA REALIDAD:<br/>PAZ IMPERFECTA</span>
              <div className="h-[120px] flex items-center justify-center border-b border-slate-200 pb-4">
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                  <path d="M50,50 C50,20 80,20 100,50 C120,80 150,80 150,50 C150,20 120,20 100,50 C80,80 50,80 50,50 Z" fill="none" stroke="#eab308" strokeWidth="6" strokeLinecap="round" />
                  <path d="M100,50 C120,80 150,80 150,50 C150,20 120,20 100,50" fill="none" stroke="#0f172a" strokeWidth="6" strokeDasharray="15, 10" strokeLinecap="round" />
                  <rect x="95" y="45" width="10" height="10" fill="#0ea5e9" transform="rotate(45 100 50)" />
                  <circle cx="100" cy="50" r="15" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="2,2" />
                </svg>
              </div>
              <p className="text-[13px] text-slate-600 text-justify">Un proceso inacabado que exige construir justicia social (paz positiva) y transformar violencias estructurales.</p>
            </div>

            <div className="md:col-span-2 flex justify-center -mt-4 mb-8 z-10">
              <div className="bg-[#fdf6e3] border-2 border-[#b58900] p-4 px-8 max-w-lg text-center shadow-md">
                <p className="text-sm font-semibold text-[#856404]">
                  El proceso no culmina con la foto inicial y el gesto del apretón de manos, sino con el cumplimiento continuo de lo acordado.
                </p>
                <div className="text-[10px] mt-1 opacity-60">(Fisas, 2004)</div>
              </div>
            </div>
          </div>

          <div className="bg-blueprint-bg bg-[radial-gradient(#d1d5db_0.5px,transparent_0.5px)] bg-[length:20px_20px] border border-slate-200 rounded-lg p-10 relative overflow-hidden mt-8">
            <h4 className="text-xl font-bold text-slate-800 mb-8">El Gran Mapa: Fases del Proceso</h4>
            <div className="absolute top-6 right-6 w-60 bg-white p-4 shadow-lg rotate-2 z-20 border border-slate-200">
              <Pin className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 text-amber-700 rotate-45 fill-amber-700" />
              <p className="text-[11px] text-slate-600 font-medium text-justify">
                <span className="font-bold block mb-1">Yuxtaposición:</span> Estas fases carecen de tiempos rígidamente demarcados. Pueden superponerse; un diálogo exploratorio puede ser corto mientras la negociación dura años, o viceversa.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto pt-10">
              <svg viewBox="0 0 900 450" className="w-full h-auto overflow-visible">
                <g transform="translate(30, 120)">
                  <path d="M0,90 L50,0 L210,0 L260,90 L210,180 L50,180 Z" fill="none" stroke="#64748b" strokeWidth="2"/>
                  <foreignObject x="35" y="45" width="190" height="120">
                    <div className="text-center">
                      <div className="text-base font-black text-slate-700 mb-1">Fase 1: Exploratoria</div>
                      <div className="text-[11px] leading-relaxed text-slate-500 max-w-[160px] mx-auto">Pre-negociación secreta. Construcción de confianza y definición de reglas de juego.</div>
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(320, 120)">
                  <path d="M0,90 L50,0 L210,0 L260,90 L210,180 L50,180 Z" fill="none" stroke="#0f172a" strokeWidth="3"/>
                  <foreignObject x="35" y="45" width="190" height="120">
                    <div className="text-center">
                      <div className="text-base font-black text-blue-950 mb-1">Fase 2: Negociación</div>
                      <div className="text-[11px] leading-relaxed text-slate-600 font-medium max-w-[160px] mx-auto">El diálogo sustancial. Debate cíclico sobre el metaconflicto y demandas.</div>
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(610, 120)">
                  <path d="M0,90 L50,0 L210,0 L260,90 L210,180 L50,180 Z" fill="none" stroke="#eab308" strokeWidth="3"/>
                  <foreignObject x="35" y="45" width="190" height="120">
                    <div className="text-center">
                      <div className="text-base font-black text-amber-700 mb-1">Fase 3: Implementación</div>
                      <div className="text-[11px] leading-relaxed text-slate-500 max-w-[160px] mx-auto">El posconflicto. Reformas estructurales para materializar lo pactado.</div>
                    </div>
                  </foreignObject>
                </g>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orientation="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#64748b" /></marker>
                  <marker id="arrowhead-navy" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orientation="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#0f172a" /></marker>
                  <marker id="arrowhead-gold" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orientation="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#eab308" /></marker>
                </defs>
                <line x1="295" y1="210" x2="315" y2="210" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="585" y1="210" x2="605" y2="210" stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrowhead-navy)" />
                <path d="M740,300 Q595,380 450,300" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead-gold)" />
                <text x="595" y="375" fill="#eab308" fontSize="12" fontWeight="700" textAnchor="middle" className="italic">Retroalimentación / Ajuste de lo pactado</text>
              </svg>
            </div>
            <div className="mt-6 text-left border-t border-slate-300/30 pt-2">
              <p className="text-[11px] text-slate-500 italic">Fuente: (Fisas V. , 2004) (Valencia & Bedoya, 2014).</p>
            </div>
          </div>

          <div className="bg-blueprint-bg bg-[radial-gradient(#d1d5db_0.5px,transparent_0.5px)] bg-[length:20px_20px] border border-slate-200 rounded-lg p-10 mt-8">
            <h4 className="text-2xl font-bold text-slate-800 mb-4 text-center">Los tres pilares de la mesa de diálogo</h4>
            <div className="relative max-w-full mx-auto py-4">
              <svg viewBox="0 0 1300 550" className="w-full h-auto overflow-visible">
                <path d="M50,20 L1250,20 L1250,50 L50,50 Z" fill="#0f172a" />
                <path d="M60,5 L1240,5 L1240,20 L60,20 Z" fill="#1e293b" stroke="#eab308" strokeWidth="1" />
                <g transform="translate(50, 50)"><rect x="0" y="20" width="100" height="380" fill="white" stroke="#64748b" strokeWidth="2" /><rect x="-10" y="400" width="120" height="30" fill="#0f172a" /></g>
                <g transform="translate(450, 50)"><rect x="0" y="20" width="100" height="380" fill="white" stroke="#eab308" strokeWidth="3" /><rect x="-10" y="400" width="120" height="30" fill="#0f172a" /></g>
                <g transform="translate(850, 50)"><rect x="0" y="20" width="100" height="380" fill="white" stroke="#64748b" strokeWidth="2" /><rect x="-10" y="400" width="120" height="30" fill="#0f172a" /></g>
                
                <foreignObject x="160" y="80" width="280" height="320">
                  <div className="pillar-content-box">
                    <span className="block font-black uppercase text-xl mb-1 text-slate-900">Lo Procedimental</span>
                    <span className="text-[12px] block font-bold mb-3 text-slate-400 uppercase tracking-widest">(Las reglas de juego)</span>
                    <ul className="text-base space-y-2 text-slate-600">
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Medidas de confianza y confidencialidad.</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Mecanismos de verificación e intermediación.</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Calendarización (tiempo, lugar, simultaneidad).</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Contexto sociopolítico y gestión de recursos.</li>
                    </ul>
                  </div>
                </foreignObject>
                
                <foreignObject x="560" y="80" width="280" height="280">
                  <div className="pillar-content-box border-amber-300">
                    <span className="block font-black uppercase text-xl mb-1 text-slate-900">Lo Sustantivo</span>
                    <span className="text-[12px] block font-bold mb-3 text-amber-600 uppercase tracking-widest">(El núcleo del conflicto)</span>
                    <ul className="text-base space-y-2 text-slate-600">
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Naturaleza e historia del metaconflicto (sus raíces).</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Incompatibilidades básicas (ideológicas o territoriales).</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Demandas y peticiones de la insurgencia.</li>
                    </ul>
                  </div>
                </foreignObject>
                
                <foreignObject x="960" y="80" width="280" height="280">
                  <div className="pillar-content-box">
                    <span className="block font-black uppercase text-xl mb-1 text-slate-900">Lo Operativo</span>
                    <span className="text-[12px] block font-bold mb-3 text-slate-400 uppercase tracking-widest">(La mecánica en el terreno)</span>
                    <ul className="text-base space-y-2 text-slate-600">
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Separación de fuerzas y cese al fuego/hostilidades.</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Logística y protocolos de seguridad.</li>
                      <li className="flex gap-2"><span className="text-peace-blue font-bold">•</span> Mecanismos de Desarme, Desmovilización y Reintegración (DDR).</li>
                    </ul>
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechniqueCard({ title, desc, special = false }: { title: string; desc: string; special?: boolean }) {
  return (
    <div className={`technique-card ${special ? 'special' : ''}`}>
      <span className="font-black text-[13px] uppercase tracking-wider border-b border-white/20 pb-1 mb-2">
        {title}
      </span>
      <p className="text-[12px] leading-snug">{desc}</p>
    </div>
  );
}

function Quadrant({ icon, title, text, highlight }: { icon: ReactNode; title: string; text: string; highlight?: 'emerald' | 'orange' }) {
  const highlightClass = highlight === 'emerald' ? 'border-emerald-500/30 text-emerald-400' : highlight === 'orange' ? 'border-orange-500/30 text-orange-400' : 'text-slate-200';
  
  return (
    <div className={`quadrant ${highlightClass}`}>
      <div className={`w-12 h-12 flex-shrink-0 opacity-80 ${highlight ? '' : 'text-slate-400'}`}>
        {icon}
      </div>
      <div>
        <span className="text-base font-extrabold uppercase mb-2 block">{title}</span>
        <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function Methodology({ openModal }: { openModal: (images: string[], caption?: string) => void }) {
  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">Diseño Metodológico</h2>
      <div className="space-y-12">
        <div className="bg-slate-900 text-white p-8 rounded-lg shadow-inner text-center max-w-4xl mx-auto">
          <h4 className="text-blue-400 font-bold text-xs uppercase mb-2">Estrategia de Investigación</h4>
          <p className="text-lg font-light tracking-wide">Cualitativa, de tipo histórico-interpretativo y basada en el estudio de caso profundo.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Settings2 className="w-5 h-5 text-blue-600" /> Técnicas Empleadas
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MethodItem 
              label="Revisión documental" 
              onClick={() => openModal([
                'https://picsum.photos/seed/doc1/800/600',
                'https://picsum.photos/seed/doc2/800/600',
                'https://picsum.photos/seed/doc3/800/600'
              ], 'Fuentes primarias y codificación documental')}
            />
            <MethodItem 
              label="Análisis del discurso" 
              onClick={() => openModal(['https://picsum.photos/seed/discourse/800/600'], 'Análisis del discurso')}
            />
            <MethodItem 
              label="Minería de datos" 
              onClick={() => openModal(['https://picsum.photos/seed/data/800/600'], 'Minería de datos y Distancia de Levenshtein')}
            />
            <MethodItem 
              label="Crítica de fuentes" 
              onClick={() => openModal(['https://picsum.photos/seed/critique/800/600'], 'Crítica de fuentes')}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function MethodItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <li 
      onClick={onClick}
      className="flex items-center justify-center p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
    >
      <span className="text-sm text-slate-700 font-semibold group-hover:text-blue-600">{label}</span>
    </li>
  );
}

function SectionPlaceholder({ title }: { title: string }) {
  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">{title}</h2>
      <div className="py-20 text-center">
        <p className="text-slate-400 italic">Contenido en desarrollo para esta sección de la tesis.</p>
      </div>
    </div>
  );
}

function ScientificDiffusion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      icon: <BookOpen className="w-10 h-10 mx-auto text-blue-800 mb-4" />,
      title: "Artículo de Investigación Indexado",
      desc: '"Análisis de las dinámicas del metaconflicto en el proceso de La Habana."',
      tag: "Revista de Paz y Conflictos, 2024"
    },
    {
      icon: <Mic className="w-10 h-10 mx-auto text-blue-800 mb-4" />,
      title: "Ponencia Internacional",
      desc: '"Lecciones aprendidas del modelo de negociación colombiano."',
      tag: "Congreso Latinoamericano de Sociología, 2025"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">Difusión Científica</h2>
      
      <div className="relative overflow-hidden w-full max-w-4xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="relative h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 w-full h-full flex flex-col justify-center">
                {slides[currentIndex].icon}
                <h4 className="text-xl font-bold text-slate-800 mb-3">{slides[currentIndex].title}</h4>
                <p className="text-slate-600 italic">{slides[currentIndex].desc}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase text-blue-500 tracking-wider">
                  {slides[currentIndex].tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles del Carrusel */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevSlide}
            className="p-3 bg-white border border-slate-200 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 bg-white border border-slate-200 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
