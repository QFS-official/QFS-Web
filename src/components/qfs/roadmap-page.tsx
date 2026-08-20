'use client';

import { motion } from 'framer-motion';
import { Map, CheckCircle2, Circle, ArrowRight, Rocket, Globe, Cpu, Building2, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const phases = [
  {
    year: '2026',
    phase: 'Fase 1',
    title: 'Foundation',
    color: '#00f0ff',
    icon: <Rocket className="w-5 h-5" />,
    status: 'active' as const,
    description: 'Construcción de los cimientos tecnológicos y los productos principales del ecosistema QFS.',
    items: [
      'Desarrollo de infraestructura QFS Core',
      'Lanzamiento y evolución de QFS Wallet',
      'Desarrollo del sistema QFSPay',
      'Diseño de arquitectura QFS Exchange DEX',
      'Implementación de seguridad multicapa',
      'Integración inicial del ecosistema',
      'Auditorías de seguridad iniciales',
      'Establecimiento de la comunidad técnica',
    ],
  },
  {
    year: '2027-2028',
    phase: 'Fase 2',
    title: 'Expansion',
    color: '#8b5cf6',
    icon: <Globe className="w-5 h-5" />,
    status: 'upcoming' as const,
    description: 'Expansión multicadena, nuevos activos y desarrollo de herramientas institucionales.',
    items: [
      'Expansión a múltiples blockchains',
      'Integración de nuevos activos digitales',
      'Desarrollo de QFS Quantum Cards',
      'APIs para empresas y desarrolladores',
      'Herramientas institucionales (treasury, compliance)',
      'Expansión internacional inicial',
      'Integración con Alianza GCRM',
      'Colaboración con Al Arab para mercados MENA',
    ],
  },
  {
    year: '2029-2030',
    phase: 'Fase 3',
    title: 'Interoperability',
    color: '#14b8a6',
    icon: <Cpu className="w-5 h-5" />,
    status: 'upcoming' as const,
    description: 'Mayor integración entre redes, tokenización de activos y servicios financieros digitales completos.',
    items: [
      'Integración avanzada entre redes blockchain',
      'Tokenización de activos reales (RWA)',
      'Servicios financieros digitales completos',
      'Infraestructura institucional madura',
      'Integración con CBDCs y monedas gubernamentales',
      'Expansión del ecosistema QFS',
      'Gobernanza descentralizada operativa',
    ],
  },
  {
    year: '2030+',
    phase: 'Fase 4',
    title: 'Global Digital Finance',
    color: '#ec4899',
    icon: <Sparkles className="w-5 h-5" />,
    status: 'future' as const,
    description: 'Construcción progresiva de una infraestructura financiera digital global, interoperable y accesible.',
    items: [
      'Infraestructura financiera digital global',
      'Conectividad total entre redes y activos',
      'Adopción masiva de servicios QFS',
      'Economía digital completamente integrada',
      'Innovación continua con tecnologías emergentes',
    ],
  },
];

export function RoadmapPage() {
  return (
    <div className="relative z-10">
      {/* Header */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#14b8a6] border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.05)]"
          >
            <Map className="w-3.5 h-3.5" />
            ROADMAP
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">QFS Roadmap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Desarrollo progresivo del ecosistema QFS a través de fases estratégicas,
            desde la infraestructura base hasta la finanzas digitales globales.
          </motion.p>
        </div>
      </section>

      {/* Ecosystem Map */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#8b5cf6]/60 uppercase">
              Mapa del Ecosistema
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mt-3">
              Un Ecosistema. <span className="gradient-text">Múltiples Servicios.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stagger}
            className="flex flex-col items-center gap-3"
          >
            {[
              { name: 'QFS Core', sub: 'Infrastructure', color: '#00f0ff' },
              { name: 'QFS Wallet', sub: 'Digital Asset Management', color: '#14b8a6' },
              { name: 'QFSPay', sub: 'Digital Payments', color: '#8b5cf6' },
              { name: 'QFS Exchange DEX', sub: 'Decentralized Trading', color: '#ec4899' },
              { name: 'QFS Quantum Cards', sub: 'Digital-to-Physical', color: '#f59e0b' },
              { name: 'QFS AI', sub: 'Intelligent Tools', color: '#ec4899' },
              { name: 'QFS Multichain', sub: 'Blockchain Interop', color: '#8b5cf6' },
              { name: 'QFS Financial Services', sub: 'Digital Economy', color: '#00f0ff' },
            ].map((node, i) => (
              <motion.div key={node.name} custom={i} variants={fadeUp} className="flex flex-col items-center">
                <div
                  className="glass-card-hover rounded-xl px-6 py-3 text-center min-w-[220px]"
                >
                  <div className="text-sm font-semibold text-white">{node.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: `${node.color}99` }}>{node.sub}</div>
                </div>
                {i < 7 && (
                  <div className="flex flex-col items-center py-1">
                    <ArrowRight className="w-4 h-4 text-white/10 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#00f0ff]/60 uppercase">
              Línea de Tiempo
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold mt-3">
              Fases de <span className="gradient-text">Desarrollo</span>
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line opacity-30" />

            <div className="space-y-12">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={stagger}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{
                        borderColor: phase.color,
                        background: phase.status === 'active' ? `${phase.color}20` : '#030712',
                      }}
                    >
                      {phase.status === 'active' ? (
                        <CheckCircle2 className="w-4 h-4" style={{ color: phase.color }} />
                      ) : (
                        <Circle className="w-4 h-4" style={{ color: `${phase.color}60` }} />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    custom={i}
                    variants={fadeUp}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] glass-card rounded-2xl p-6 relative overflow-hidden ${
                      phase.status === 'active' ? 'quantum-glow' : ''
                    }`}
                  >
                    {phase.status === 'active' && (
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5"
                        style={{ background: `linear-gradient(90deg, ${phase.color}, ${phase.color}40)` }}
                      />
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${phase.color}15`, color: phase.color }}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <div className="text-xs font-mono" style={{ color: `${phase.color}99` }}>
                          {phase.phase} — {phase.year}
                        </div>
                        <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: phase.color }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
