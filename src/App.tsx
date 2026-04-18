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
const base = import.meta.env.BASE_URL;

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
                    src={base + "lkdh2.png"}
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
            {activeTab === 'fallidos' && <FailedProcesses />}
            {activeTab === 'resultados' && <SectionPlaceholder title="Resultados" />}
            {activeTab === 'conclusiones' && <Conclusions />}
            {activeTab === 'difusion' && <ScientificDiffusion openModal={openModal} />}
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

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-1.5 h-full bg-blue-600 self-stretch rounded-full flex-shrink-0" />
            <p className="text-base text-slate-700 text-justify leading-relaxed">
              <span className="font-bold text-blue-900 uppercase tracking-tighter mr-2">Cualitativo:</span> 
              por cuanto el proceso de diseño y formulación de la investigación se caracterizó por ser flexible y el grueso de los datos son de carácter soft.
            </p>
          </div>
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-1.5 h-full bg-blue-600 self-stretch rounded-full flex-shrink-0" />
            <p className="text-base text-slate-700 text-justify leading-relaxed">
              <span className="font-bold text-blue-900 uppercase tracking-tighter mr-2">Histórico-interpretativo:</span> 
              reconstruyó la realidad tomando en cuenta los hechos, las decisiones, los actores, la agenda, las evidencias documentales. El razonamiento es interpretativo con base en patrones narrativos que explicaran las categorías de estudio.
            </p>
          </div>
          <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div className="w-1.5 h-full bg-blue-600 self-stretch rounded-full flex-shrink-0" />
            <p className="text-base text-slate-700 text-justify leading-relaxed">
              <span className="font-bold text-blue-900 uppercase tracking-tighter mr-2">Estudio de caso:</span> 
              se definieron puntos de partida y puntos de cierre (hitos) para cada una de las fases del proceso.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Settings2 className="w-5 h-5 text-blue-600" /> Técnicas Empleadas
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MethodItem 
              label="Revisión documental" 
              onClick={() => openModal([
              base + "fuentes primarias intencionales 1.png",
              base + "fuentes primarias intencionales 2.png",
              base + "fuentes primarias no intencionales.png"
            ], "Revisión documental: Fuentes primarias")}
            />
            <MethodItem 
              label="Análisis del discurso" 
              onClick={() => openModal([base + "Codificación de la revisión documental.png"], 'Análisis del discurso: Codificación')}
            />
            <MethodItem 
              label="Minería de datos" 
              onClick={() => openModal(['https://picsum.photos/seed/data/800/600'], 'Minería de datos y Distancia de Levenshtein')}
            />
            <MethodItem 
              label="Crítica de fuentes" 
              onClick={() => openModal([base + "Crítica de fuentes.png"], 'Crítica de fuentes')}
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

function ScientificDiffusion({ openModal }: { openModal: (images: string[], caption?: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      year: "2018",
      title: "I Escuela de Verano P.U. Javeriana – U. Goethe",
      images:  [base + "eSCUELA INTERNAL VERANO 2018.png"],
      icon: <GraduationCap className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2019",
      title: "Beca-CALAS. Feria Internacional del Libro (FIL) de Guadalajara",
      images:  [base + "CALAS 2.png", "Fil Guadalajara participación.png", "Fil guadalajara_santos_timochen.png"],
      icon: <BookOpen className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2019",
      title: "Beca-La Rábida. Estancia de investigación",
      images:  [base + "Rábida.jpg"],
      icon: <MapPin className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2022",
      title: "Entrevista en la Red NET CAPAZ",
      images:  [base + "A paso de Tesis_lkdh.png"],
      icon: <Mic className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2022",
      title: "Artículo publicado en Revista científica",
      desc: "NegociarYAcordarLaPazConLasFARCEP",
      icon: <BookOpen className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2023",
      title: "Ponente Congreso internacional de Investigación para la paz",
      images:  [base + "Congreso de paz Granada.png"],
      icon: <Mic className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2024",
      title: "Capítulo de libro",
      images:  [base + "Capítulo en Teseo"],
      desc: "Libro teseo_capitulo 301",
      icon: <BookOpen className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2024",
      title: "Ponente Congreso Internacional para el Estudio de la Mediación y los conflictos",
      images:  [base + "Portugal.jpg"],
      icon: <Mic className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2024",
      title: "Artículo publicado en Revista científica",
      desc: "Artículo Historelo, Artículo más consultado del mes",
      icon: <BookOpen className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    },
    {
      year: "2025",
      title: "Ponente XIV Congreso latinoamericano de investigación para la paz CLAIP",
      images:  [base + "Claip.png"],
      icon: <Mic className="w-10 h-10 mx-auto text-blue-800 mb-4" />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">Difusión Científica</h2>
      
      <div className="relative overflow-hidden w-full max-w-4xl mx-auto rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="relative h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 w-full h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {slides[currentIndex].year}
                </div>
                {slides[currentIndex].icon}
                <h4 className="text-xl font-bold text-slate-800 mb-3">{slides[currentIndex].title}</h4>
                {slides[currentIndex].desc && (
                  <p className="text-slate-600 italic mb-4">{slides[currentIndex].desc}</p>
                )}
                
                {slides[currentIndex].images && (
                  <button 
                    onClick={() => openModal(slides[currentIndex].images!, slides[currentIndex].title)}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold"
                  >
                    <HelpCircle className="w-4 h-4" /> Ver Evidencia ({slides[currentIndex].images.length})
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles del Carrusel */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={prevSlide}
            className="p-3 bg-white border border-slate-200 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-600 w-4' : 'bg-slate-300'}`}
              />
            ))}
          </div>

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

function FailedProcesses() {
  const data = [
    {
      category: "Duración",
      uribe: "1982-1987. Alrededor de 1731 días",
      caracas: "1991-1992. Alrededor de 353 días",
      caguan: "1999-2002. Alrededor de 1201 días"
    },
    {
      category: "Quiebre definitivo",
      uribe: "16/06/1987",
      caracas: "4/05/1992",
      caguan: "20/02/2002"
    },
    {
      category: "Fase en la que quedó cada proceso",
      uribe: "Negociación",
      caracas: "Negociación",
      caguan: "Negociación"
    },
    {
      category: "Sede del proceso de paz",
      uribe: "Casa Verde (Colombia)",
      caracas: "Caracas, Venezuela y Tlaxcala, México.",
      caguan: "San Vicente del Caguán (Colombia)"
    },
    {
      category: "Tipo de agenda",
      uribe: "“Paz como ausencia de violencia” (Minimalista-Intermedia)",
      caracas: "“Paz como ausencia de violencia cultural, estructural y simbólica” (Maximalista-abierta)",
      caguan: "“Paz como ausencia de violencia cultural, estructural y simbólica” Maximalista, amplia y abierta (12 puntos, 48 subtemas)."
    },
    {
      category: "Enfoque de la agenda",
      uribe: "Temas sustantivos: Violencia, amnistía, reforma agraria, participación política.",
      caracas: "Temas sustantivos: Reforma estructural del Estado, DD.HH., democratización, economía",
      caguan: "Temas sustantivos: Reconfiguración integral del Estado, economía y conflicto, reformas para democracia, nueva Asamblea nacional constituyente relaciones internacionales."
    },
    {
      category: "Acompañamiento internacional",
      uribe: "No",
      caracas: "Sí (Venezuela y México)",
      caguan: "Amplio (países amigos y ONU)"
    },
    {
      category: "Reglas de funcionamiento",
      uribe: "Cese al fuego con verificación",
      caracas: "Reglas concertadas, canales formales de comunicación. Presencia de testigo internacional.",
      caguan: "Zona de Distensión en el Caguán. “Reglas de juego” frente a zona, participación de la sociedad civil. Manejo de comunicaciones."
    },
    {
      category: "Técnica de negociación",
      uribe: "Negociación directa con verificación (comisiones)",
      caracas: "Negociación directa con observación/facilitación internacional",
      caguan: "Negociación directa con facilitación y acompañamiento internacional"
    },
    {
      category: "Metodología de trabajo",
      uribe: "Diálogo directo (comisión nacional, 10 subcomisiones, comités regionales) y verificación del cese.",
      caracas: "Rondas formales por temas en sedes neutrales con observación internacional",
      caguan: "Mesa nacional con comité técnico, audiencias públicas y acompañamiento internacional."
    },
    {
      category: "Crisis del proceso",
      uribe: "Ruptura tregua. Paramilitares y violencia contra U.P.",
      caracas: "Violencia, falta de acuerdos sobre cese. Secuestro y muerte en cautiverio de exministro",
      caguan: "“Silla vacía” de Marulanda: Controversias sobre verificación y DIH; secuestro de avión."
    },
    {
      category: "Participación de la sociedad civil",
      uribe: "Alta. Diálogo nacional.",
      caracas: "Media. Actores políticos y gremiales",
      caguan: "Alta. Audiencias públicas (televisadas)."
    },
    {
      category: "¿Hubo cese al fuego?",
      uribe: "Sí: tregua/cese bilateral firmado en 1984.",
      caracas: "No. El punto 1 era explorar fórmula (no se concretó)",
      caguan: "No. Hubo propuestas de desescalamiento y protocolos DIH."
    },
    {
      category: "Hitos del proceso",
      uribe: "Acuerdos de La Uribe 28/03/1984: Cese al Fuego y Tregua",
      caracas: "06/06/1991 Agenda de Caracas",
      caguan: "07/01/1999: instalación de la Mesa; 06/05/1999: Agenda Común; 24/10/1999: Mesa"
    }
  ];

  return (
    <div className="academic-card overflow-x-auto">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">Procesos Fallidos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 p-3 text-left font-bold text-slate-700 w-1/4">Proceso de paz / Subcategoría</th>
              <th className="border border-slate-300 p-3 text-center font-bold text-slate-700 w-1/4">Uribe (1982)</th>
              <th className="border border-slate-300 p-3 text-center font-bold text-slate-700 w-1/4">Caracas-Tlaxcala (1991-1992)</th>
              <th className="border border-slate-300 p-3 text-center font-bold text-slate-700 w-1/4">Caguán (1999)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="border border-slate-300 p-3 font-bold text-slate-800 bg-slate-50/50">{row.category}</td>
                <td className="border border-slate-300 p-3 text-slate-600 text-justify leading-relaxed">{row.uribe}</td>
                <td className="border border-slate-300 p-3 text-slate-600 text-justify leading-relaxed">{row.caracas}</td>
                <td className="border border-slate-300 p-3 text-slate-600 text-justify leading-relaxed">{row.caguan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Conclusions() {
  return (
    <div className="academic-card">
      <h2 className="font-serif text-3xl text-slate-800 mb-8 border-b pb-4">Conclusiones</h2>
      <div className="space-y-8">
        <p className="text-blue-900 text-lg font-bold italic text-center leading-relaxed max-w-4xl mx-auto mb-10">
          "La paz es un diseño continuo. Un proceso de paz es un ejercicio de arquitectura social imperfecta. La resolución de un conflicto histórico no exige magia, sino paciencia procedimental absoluta, audacia política para aprovechar las ventanas de oportunidad y la inquebrantable convicción de que la paz real se construye todos los días después de la firma."
        </p>
        <p className="text-slate-600 text-sm italic mb-6">
          A continuación se presentan las conclusiones principales de la investigación, estructuradas en torno a los supuestos iniciales:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="assumption-box">
            <span className="block text-blue-900 font-bold text-sm mb-3">S1. “Diseño y agenda”</span>
            <ul className="text-[13px] text-slate-600 space-y-2 list-disc pl-4 text-justify">
              <li>La agenda del proceso operó como dispositivo estructurante que incidió en las tres dimensiones de la violencia: directa, estructural y cultural.</li>
              <li>Los principios procedimentales funcionaron como herramienta de gestión de ambigüedades y garantes de coherencia metodológica.</li>
              <li>El diseño y la agenda constituyeron la columna vertebral arquitectónica del proceso, diferenciando esta negociación de las experiencias previas (Caracas-Tlaxcala y Caguán).</li>
            </ul>
          </div>
          <div className="assumption-box">
            <span className="block text-blue-900 font-bold text-sm mb-3">S2. “Territorio neutral y reglas de juego”</span>
            <ul className="text-[13px] text-slate-600 space-y-2 list-disc pl-4 text-justify">
              <li>La sede en La Habana aportó neutralidad política, aislamiento geográfico y blindaje frente a presiones de spoilers y ruido mediático.</li>
              <li>La regla "nada está acordado hasta que todo esté acordado" preservó la integridad del proceso y midió continuamente la voluntad real de las partes.</li>
              <li>La negociación en medio del conflicto armado activó incentivos de ventaja relativa en la mesa, configurando una situación de madurez elevando los costos de prolongar las hostilidades</li>
            </ul>
          </div>
          <div className="assumption-box">
            <span className="block text-blue-900 font-bold text-sm mb-3">S3. “Dinámica de participación y legitimidad procesual”</span>
            <ul className="text-[13px] text-slate-600 space-y-2 list-disc pl-4 text-justify">
              <li>Los mecanismos de participación constituyeron una innovación metodológica diferenciadora frente a otras experiencias y modelos de negociación cerrada.</li>
              <li>La participación estructurada de víctimas, mujeres, colectivos étnicos y sociedad civil incrementó la legitimidad del proceso y humanizó el diálogo.</li>
              <li>Se amplió el espacio deliberativo de grupos subalternos históricamente excluidos de los escenarios de decisión política.</li>
            </ul>
          </div>
          <div className="assumption-box">
            <span className="block text-blue-900 font-bold text-sm mb-3">S4. “Acompañamiento y garantías internacionales”</span>
            <ul className="text-[13px] text-slate-600 space-y-2 list-disc pl-4 text-justify">
              <li>Los garantes y acompañantes proveyeron estabilidad, credibilidad y presión reputacional externa sobre las partes.</li>
              <li>Los acompañantes internacionales actuaron como actores estratégicos de verificación y respaldo institucional al proceso.</li>
              <li>El acompañamiento internacional operó como mecanismo de contención en momentos de transgresión de confianza, evitando la escalada y la ruptura del diálogo.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="assumption-box border-l-orange-500 bg-orange-50/30">
            <span className="block text-orange-900 font-bold text-sm mb-3 uppercase tracking-wider">Obstáculos identificados</span>
            <ul className="text-[13px] text-slate-600 space-y-2 list-disc pl-4 text-justify">
              <li>Ausencia de una estrategia integral de comunicación en los tres niveles relacionales (intraequipo, interequipos y mesa-opinión pública), que generó ruido capitalizado por los spoilers.</li>
              <li>Instrumentalización política del proceso en la contienda electoral, que amplió los incentivos para la acción de actores saboteadores y prolongó la negociación.</li>
              <li>Desconfianza inicial profunda y narrativas incompatibles sobre el origen del conflicto, que obligaron a priorizar los acuerdos procedimentales como condición para sostener el diálogo sustantivo.</li>
            </ul>
          </div>
          
          <div className="assumption-box border-l-emerald-600 bg-emerald-50/30">
            <span className="block text-emerald-900 font-bold text-sm mb-3 uppercase tracking-wider">Factor transversal</span>
            <ul className="text-[13px] text-slate-600 space-y-2 list-disc pl-4 text-justify">
              <li>La voluntad política operó como variable determinante e intangible, transversal y visible en todo el proceso, sin la cual ningún andamiaje técnico habría sido suficiente.</li>
              <li>El proceso de La Habana demostró que la madurez del conflicto y la voluntad política de las partes permitieron transformar los impasses en oportunidades, consolidando una paz imperfecta pero políticamente relevante.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
