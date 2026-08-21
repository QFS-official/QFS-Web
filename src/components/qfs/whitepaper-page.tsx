'use client';

import { motion } from 'framer-motion';
import {
  FileText, Atom, Shield, Wallet, CreditCard, ArrowRightLeft,
  Bot, Globe, Network, Landmark, Users, Cpu, Layers, Link2,
  BookOpen, Target, Lightbulb, CheckCircle2
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const tocItems = [
  { num: '01', title: 'Resumen Ejecutivo', id: 'exec-summary' },
  { num: '02', title: 'Visión y Arquitectura', id: 'vision' },
  { num: '03', title: 'Componentes del Ecosistema', id: 'components' },
  { num: '04', title: 'Seguridad y Criptografía', id: 'security' },
  { num: '05', title: 'Infraestructura Multichain', id: 'multichain' },
  { num: '06', title: 'Inteligencia Artificial', id: 'ai' },
  { num: '07', title: 'Economía de Activos Digitales', id: 'digital-economy' },
  { num: '08', title: 'Soluciones Institucionales', id: 'institutional' },
  { num: '09', title: 'Alianzas Estratégicas', id: 'alliances' },
  { num: '10', title: 'Comunidad NESG', id: 'nesg' },
];

export function WhitePaperPage() {
  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#7c3aed] border border-violet-200 bg-violet-50/80"
          >
            <FileText className="w-3.5 h-3.5" />
            LIBRO BLANCO
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">QFS White Paper</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Documento técnico que describe la visión, arquitectura y desarrollo progresivo
            del Quantum Financial System.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-400"
          >
            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> v1.0</span>
            <span className="text-gray-200">|</span>
            <span>Agosto 2026</span>
            <span className="text-gray-200">|</span>
            <span>Confidencial</span>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Table of Contents */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-xl font-bold mb-8 flex items-center gap-3"
          >
            <motion.span variants={fadeUp} className="text-[#2563eb]">
              <Target className="w-5 h-5" />
            </motion.span>
            <motion.span variants={fadeUp}>Contenido</motion.span>
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 gap-2"
          >
            {tocItems.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={fadeUp}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-blue-200/50 transition-colors cursor-default group"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
              >
                <span className="text-xs font-mono text-[#2563eb]/50 w-6">{item.num}</span>
                <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* 01 - Executive Summary */}
      <WhitePaperSection
        num="01"
        title="Resumen Ejecutivo"
        icon={<Lightbulb className="w-5 h-5" />}
        color="#2563eb"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            El sistema financiero global está experimentando una transformación fundamental. La digitalización
            acelerada, la evolución de las tecnologías blockchain, el surgimiento de activos digitales y la creciente
            demanda de transparencia y accesibilidad están redefiniendo las expectativas de usuarios, empresas e
            instituciones respecto a los servicios financieros.
          </p>
          <p>
            En este contexto, <span className="text-[#2563eb] font-medium">QFS Oficial</span> presenta una
            iniciativa orientada al desarrollo de una nueva infraestructura financiera digital que integra múltiples
            tecnologías convergentes: blockchain, inteligencia artificial, criptografía avanzada, pagos digitales y
            servicios financieros descentralizados.
          </p>
          <p>
            QFS no busca reemplazar los sistemas existentes, sino complementar la evolución del ecosistema financiero
            global proporcionando una infraestructura modular, segura y accesible que pueda adaptarse a las
            necesidades de diferentes usuarios y jurisdicciones. El enfoque se basa en la construcción progresiva,
            donde cada componente del ecosistema se desarrolla e integra de manera incremental.
          </p>
          <div className="bg-blue-50/50 rounded-xl p-4 mt-6 border border-blue-100/50">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-slate-800 mb-1">Propuesta Central</div>
                <div className="text-sm text-slate-500">
                  Construir un ecosistema financiero digital integrado donde Wallet, Payments, Exchange, Cards, AI,
                  Blockchain y Multichain funcionen dentro de una arquitectura unificada, progresiva y verificable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </WhitePaperSection>

      {/* 02 - Vision */}
      <WhitePaperSection
        num="02"
        title="Visión y Arquitectura"
        icon={<Atom className="w-5 h-5" />}
        color="#7c3aed"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            La visión de QFS se fundamenta en cinco pilares: <span className="text-[#2563eb] font-medium">Seguridad</span>,
            <span className="text-[#7c3aed] font-medium"> Transparencia</span>,
            <span className="text-[#0d9488] font-medium"> Interoperabilidad</span>,
            <span className="text-[#db2777] font-medium"> Descentralización</span> e
            <span className="text-[#d97706] font-medium"> Innovación</span>. Cada uno de estos principios guía el diseño
            y desarrollo de cada componente del ecosistema.
          </p>
          <p>
            La arquitectura QFS está diseñada como un sistema modular donde cada componente opera de forma
            independiente pero puede integrarse con los demás. Esta modularidad permite un desarrollo progresivo,
            donde la funcionalidad se construye y despliega por fases, reduciendo riesgos y permitiendo adaptación
            continua.
          </p>
          <p>
            La visión a largo plazo contempla una infraestructura financiera digital global que conecte usuarios,
            empresas, instituciones y gobiernos, facilitando la gestión y transferencia de activos digitales de
            manera segura, transparente y eficiente. Esta visión incluye la participación progresiva en la economía
            de activos digitales, incluyendo criptoactivos, stablecoins, activos tokenizados y Real World Assets (RWA).
          </p>
        </div>
      </WhitePaperSection>

      {/* 03 - Components */}
      <WhitePaperSection
        num="03"
        title="Componentes del Ecosistema"
        icon={<Layers className="w-5 h-5" />}
        color="#0d9488"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            El ecosistema QFS se compone de varios componentes integrados, cada uno diseñado para cumplir una
            función específica dentro de la arquitectura financiera digital:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 my-6">
            {[
              { name: 'QFS Core', desc: 'Infraestructura base que conecta todos los componentes del ecosistema.' },
              { name: 'QFS Wallet', desc: 'Billetera digital multi-activos y multi-cadena para gestión integral.' },
              { name: 'QFSPay', desc: 'Sistema de pagos y transferencias digitales integrado al ecosistema.' },
              { name: 'QFS Exchange DEX', desc: 'Plataforma descentralizada de intercambio de activos digitales.' },
              { name: 'QFS Quantum Cards', desc: 'Tarjetas que conectan activos digitales con el mundo real.' },
              { name: 'QFS Financial Services', desc: 'Suite de servicios financieros para usuarios e instituciones.' },
            ].map((comp) => (
              <div key={comp.name} className="bg-white rounded-xl p-4 border border-gray-100" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
                <div className="text-sm font-semibold text-slate-800 mb-1">{comp.name}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{comp.desc}</div>
              </div>
            ))}
          </div>
          <p>
            Cada componente se desarrolla de manera progresiva, con integraciones que se activan conforme
            la infraestructura base está lista y los marcos regulatorios correspondientes están clarificados.
          </p>
        </div>
      </WhitePaperSection>

      {/* 04 - Security */}
      <WhitePaperSection
        num="04"
        title="Seguridad y Criptografía"
        icon={<Shield className="w-5 h-5" />}
        color="#2563eb"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            La seguridad es el pilar más crítico del ecosistema QFS. La arquitectura contempla múltiples capas
            de protección que evolucionan continuamente para enfrentar amenazas emergentes. Esto incluye
            criptografía resistente a computación cuántica, autenticación multifactor avanzada, gestión segura
            de claves criptográficas, y sistemas de detección de anomalías impulsados por inteligencia artificial.
          </p>
          <p>
            El enfoque de seguridad de QFS no es estático: está diseñado para evolucionar conjuntamente con las
            nuevas amenazas digitales. Esto implica auditorías periódicas de smart contracts, monitoreo continuo
            de transacciones, y la incorporación de nuevos protocolos criptográficos conforme la tecnología avanza.
          </p>
        </div>
      </WhitePaperSection>

      {/* 05 - Multichain */}
      <WhitePaperSection
        num="05"
        title="Infraestructura Multichain"
        icon={<Network className="w-5 h-5" />}
        color="#d97706"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            QFS está orientado a una arquitectura interoperable que no se limita a una única red blockchain.
            La visión multicadena permite conectar progresivamente diferentes redes y protocolos, creando
            un ecosistema más flexible, resiliente y escalable.
          </p>
          <p>
            La infraestructura multichain se implementa mediante puentes (bridges) y protocolos de interoperabilidad
            que permiten la transferencia fluida de activos entre diferentes redes. Esto significa que un usuario
            podría gestionar activos en múltiples cadenas desde una única interfaz QFS Wallet, con QFSPay
            facilitando pagos independientemente de la red subyacente.
          </p>
        </div>
      </WhitePaperSection>

      {/* 06 - AI */}
      <WhitePaperSection
        num="06"
        title="Inteligencia Artificial"
        icon={<Bot className="w-5 h-5" />}
        color="#db2777"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            La inteligencia artificial se integra como una capa transversal del ecosistema QFS, aplicándose en
            múltiples áreas: seguridad (detección de transacciones anómalas), monitoreo de riesgos, asistencia
            financiera personalizada, automatización de compliance y optimización de infraestructura.
          </p>
          <p>
            La visión de IA en QFS no es reemplazar el juicio humano, sino amplificar las capacidades del
            ecosistema proporcionando análisis en tiempo real, alertas tempranas y herramientas que ayuden
            a los usuarios a tomar decisiones financieras informadas.
          </p>
        </div>
      </WhitePaperSection>

      {/* 07 - Digital Economy */}
      <WhitePaperSection
        num="07"
        title="Economía de Activos Digitales"
        icon={<Globe className="w-5 h-5" />}
        color="#0d9488"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            QFS está orientado a participar en la evolución hacia una economía donde diferentes tipos de activos
            puedan representarse y gestionarse digitalmente. Esto incluye criptoactivos, stablecoins, activos
            tokenizados, commodities tokenizados, activos financieros digitales y Real World Assets (RWA).
          </p>
          <p>
            La incorporación de activos respaldados por bienes físicos requiere mecanismos verificables de custodia,
            auditoría y cumplimiento regulatorio. QFS contempla el desarrollo de estas capacidades de forma
            progresiva, priorizando la transparencia y la verificabilidad en cada etapa.
          </p>
        </div>
      </WhitePaperSection>

      {/* 08 - Institutional */}
      <WhitePaperSection
        num="08"
        title="Soluciones Institucionales"
        icon={<Landmark className="w-5 h-5" />}
        color="#7c3aed"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            QFS también contempla soluciones específicas para empresas e instituciones, incluyendo gestión
            de activos digitales a escala, treasury management, pagos empresariales, transferencias internacionales,
            APIs financieras, custodia institucional, tokenización de activos y herramientas de compliance.
          </p>
          <p>
            Estas soluciones se desarrollarán en fases posteriores del roadmap, una vez que la infraestructura base
            y los productos orientados al consumidor estén operativos y verificados.
          </p>
        </div>
      </WhitePaperSection>

      {/* 09 - Alliances */}
      <WhitePaperSection
        num="09"
        title="Alianzas Estratégicas"
        icon={<Link2 className="w-5 h-5" />}
        color="#d97706"
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            QFS construye su visión sobre alianzas estratégicas que fortalezcan la infraestructura y expandan
            el alcance del ecosistema:
          </p>
          <div className="space-y-3 my-4">
            <div className="bg-white rounded-xl p-4 border-l-2 border-l-[#2563eb] border border-gray-100" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <div className="text-sm font-semibold text-slate-800 mb-1">Alianza GCRM</div>
              <div className="text-xs text-slate-500 leading-relaxed">
                Integración de servicios financieros digitales para conectar economías regionales con QFS,
                facilitando pagos y transferencias transfronterizas.
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-2 border-l-[#d97706] border border-gray-100" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <div className="text-sm font-semibold text-slate-800 mb-1">Al Arab</div>
              <div className="text-xs text-slate-500 leading-relaxed">
                Expansión en mercados de Medio Oriente y Norte de África, integrando activos digitales
                con sistemas financieros regionales existentes.
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-2 border-l-[#7c3aed] border border-gray-100" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}>
              <div className="text-sm font-semibold text-slate-800 mb-1">Monedas de Gobiernos</div>
              <div className="text-xs text-slate-500 leading-relaxed">
                Integración progresiva con CBDCs y activos digitales gubernamentales para establecer
                puentes entre finanzas tradicionales y el ecosistema descentralizado.
              </div>
            </div>
          </div>
        </div>
      </WhitePaperSection>

      {/* 10 - NESG */}
      <WhitePaperSection
        num="10"
        title="Comunidad NESG"
        icon={<Users className="w-5 h-5" />}
        color="#db2777"
        isLast
      >
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            QFS desarrolla su visión dentro de una comunidad tecnológica y financiera vinculada al ecosistema NESG.
            La comunidad impulsa iniciativas relacionadas con finanzas digitales, blockchain, DeFi, inclusión financiera,
            innovación tecnológica, proyectos de desarrollo, economía digital y cooperación internacional.
          </p>
          <p>
            La participación comunitaria es fundamental para el desarrollo de QFS, proporcionando retroalimentación,
            validación de uso cases y apoyo en la adopción progresiva de la plataforma.
          </p>
          <div className="bg-pink-50/50 rounded-xl p-4 mt-4 border border-pink-100/50">
            <div className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-600">Nota:</strong> La referencia a NESARA-GESARA se presenta como
              parte de la visión y narrativa comunitaria; cualquier afirmación sobre reconocimiento gubernamental,
              adopción oficial o implementación internacional deberá estar respaldada por documentación verificable.
            </div>
          </div>
        </div>
      </WhitePaperSection>
    </div>
  );
}

function WhitePaperSection({
  num, title, icon, color, children, isLast = false,
}: {
  num: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${color}0d`, color, boxShadow: `0 4px 12px ${color}10` }}
              >
                {icon}
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest" style={{ color: `${color}80` }}>
                  SECCIÓN {num}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              {children}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {!isLast && <div className="section-divider max-w-5xl mx-auto" />}
    </>
  );
}