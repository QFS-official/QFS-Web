'use client';

import { motion } from 'framer-motion';
import { Globe, Building2, Users, Handshake, Star } from 'lucide-react';

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

const alliances = [
  {
    name: 'Alianza GCRM',
    desc: 'Alianza estratégica con GCRM para la integración de servicios financieros digitales, facilitando la conectividad entre economías regionales y el ecosistema QFS mediante soluciones de pago y transferencias transfronterizas.',
    color: '#2563eb',
    tag: 'Socio Estratégico',
  },
  {
    name: 'Al Arab',
    desc: 'Colaboración con Al Arab para expandir la infraestructura financiera digital en mercados de Medio Oriente y Norte de África, integrando activos digitales con sistemas financieros regionales existentes.',
    color: '#d97706',
    tag: 'Expansión Regional',
  },
  {
    name: 'Monedas de Gobiernos',
    desc: 'Integración progresiva con monedas digitales de bancos centrales (CBDCs) y activos digitales gubernamentales para establecer puentes entre la finanzas tradicionales y el ecosistema descentralizado.',
    color: '#7c3aed',
    tag: 'Gobierno Digital',
  },
];

export function HomePagePart2() {
  return (
    <>
      {/* ===== ALLIANCES ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#d97706]/50 uppercase">
              Alianzas Estratégicas
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              <span className="gradient-text">Alianzas</span> Globales
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto">
              QFS construye puentes de colaboración con organizaciones y gobiernos para una infraestructura financiera verdaderamente global.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {alliances.map((a, i) => (
              <motion.div
                key={a.name}
                custom={i}
                variants={fadeUp}
                className="bg-white rounded-3xl p-8 relative overflow-hidden group border border-gray-100 hover:border-blue-200/50 transition-all duration-300"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.02)' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${a.color}, ${a.color}40)` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${a.color}0d`, boxShadow: `0 4px 12px ${a.color}10` }}
                >
                  <Handshake className="w-6 h-6" style={{ color: a.color }} />
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{
                    color: a.color,
                    background: `${a.color}0a`,
                    border: `1px solid ${a.color}15`,
                  }}
                >
                  {a.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{a.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ===== WHY QFS ===== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#2563eb]/50 uppercase">
              Por qué QFS
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              ¿Por qué <span className="gradient-text">QFS</span>?
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {whyQFS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#2563eb] group-hover:scale-110 transition-transform bg-gradient-to-br from-blue-50 to-violet-50"
                  style={{ boxShadow: `0 4px 12px ${item.color}10` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-slate-900 font-semibold mb-2 text-sm uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ===== CTA ===== */}
      <section className="py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="relative bg-white rounded-3xl p-8 md:p-16 overflow-hidden"
            style={{
              boxShadow: '0 4px 32px rgba(37, 99, 235, 0.08), 0 2px 8px rgba(124, 58, 237, 0.06)',
            }}
          >
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#db2777]" />
            {/* Subtle glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-2xl" />

            <div className="relative">
              <motion.div variants={fadeUp} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 flex items-center justify-center mx-auto mb-6"
                style={{ boxShadow: '0 4px 16px rgba(37,99,235,0.1)' }}
              >
                <AtomIcon className="w-8 h-8 text-[#2563eb]" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Construyendo el Futuro</span>
                <br />
                <span className="text-slate-900">de las Finanzas Digitales</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                QFS es más que una wallet, más que pagos, más que un exchange. Es un ecosistema financiero
                digital integrado diseñado para la próxima generación de la economía global.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <button className="quantum-btn-solid px-8 py-3.5 rounded-2xl text-sm font-semibold cursor-pointer">
                  Explorar QFS
                </button>
                <button className="quantum-btn px-8 py-3.5 rounded-2xl text-sm font-medium cursor-pointer" style={{ borderColor: 'rgba(124,58,237,0.2)', color: '#7c3aed' }}>
                  Unirse a la Comunidad
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

const whyQFS = [
  { title: 'Seguridad', desc: 'Infraestructura diseñada con seguridad como prioridad absoluta.', icon: <Star className="w-6 h-6" />, color: '#2563eb' },
  { title: 'Velocidad', desc: 'Procesamiento digital eficiente y escalable.', icon: <Globe className="w-6 h-6" />, color: '#0d9488' },
  { title: 'Transparencia', desc: 'Tecnología blockchain y registros verificables.', icon: <Building2 className="w-6 h-6" />, color: '#7c3aed' },
  { title: 'Acceso', desc: 'Servicios financieros accesibles desde una plataforma integrada.', icon: <Users className="w-6 h-6" />, color: '#db2777' },
  { title: 'Interoperabilidad', desc: 'Conexión entre diferentes redes y activos.', icon: <Handshake className="w-6 h-6" />, color: '#d97706' },
  { title: 'Innovación', desc: 'Blockchain + IA + Criptografía + Finanzas Digitales.', icon: <Star className="w-6 h-6" />, color: '#2563eb' },
];

// Simple atom SVG icon inline for the CTA section
function AtomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}
