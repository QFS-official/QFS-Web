#!/usr/bin/env python3
"""Fix home-page.tsx to use td() for all text data instead of hardcoded arrays."""
import re

with open('/home/z/my-project/src/components/qfs/home-page.tsx', 'r') as f:
    content = f.read()

# 1. Fix the import (already correct but verify)
content = content.replace(
    "import { ecosystemCardStyles, pillarIcons } from './home-data';",
    "import { ecosystemCardStyles, pillarIcons } from './home-data';"
)

# 2. Fix Security title duplication: {t('sec.title')} <span className="gradient-text">Security</span>
content = content.replace(
    "{t('sec.title')} <span className=\"gradient-text\">Security</span>",
    "{t('sec.title')}"
)

# 3. Replace ecosystem cards rendering
old_eco = """{ecosystemCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                >
                  {card.icon}
                </div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-2 flex items-center gap-2`}>
                  {card.title}
                  <span className="text-sm opacity-60">{card.emoji}</span>
                </h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{card.desc}</p>
              </motion.div>
            ))}"""

new_eco = """{(() => {
              const ecoData = td('eco.cards');
              const emojis = ['⚛️', '💳', '👛', '🔄', '💳', '🏦', '🌍', '🤖'];
              return ecosystemCardStyles.map((style, i) => (
              <motion.div
                key={ecoData[i * 2]}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${style.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                >
                  {style.icon}
                </div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-2 flex items-center gap-2`}>
                  {ecoData[i * 2]}
                  <span className="text-sm opacity-60">{emojis[i]}</span>
                </h3>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{ecoData[i * 2 + 1]}</p>
              </motion.div>
              ));
            })()}"""

content = content.replace(old_eco, new_eco)

# 4. Replace pillars rendering
old_pil = """{pillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#2563eb] group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-gradient-to-br from-blue-50 to-violet-50'}`}
                  style={{ boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}
                >
                  {p.icon}
                </div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-2 text-sm uppercase tracking-wider`}>{p.title}</h3>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{p.desc}</p>
              </motion.div>
            ))}"""

new_pil = """{(() => {
              const pilData = td('pil.items');
              return pillarIcons.map((icon, i) => (
              <motion.div
                key={pilData[i * 2]}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
                className="glass-card-hover rounded-2xl p-6 text-center group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#2563eb] group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-blue-500/10' : 'bg-gradient-to-br from-blue-50 to-violet-50'}`}
                  style={{ boxShadow: '0 4px 12px rgba(37,99,235,0.08)' }}
                >
                  {icon}
                </div>
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} font-semibold mb-2 text-sm uppercase tracking-wider`}>{pilData[i * 2]}</h3>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{pilData[i * 2 + 1]}</p>
              </motion.div>
              ));
            })()}"""

content = content.replace(old_pil, new_pil)

# 5. Replace security features
old_sec = """{securityFeatures.map((feat, i) => (
              <motion.div
                key={feat}"""

new_sec = """{td('sec.features').map((feat, i) => (
              <motion.div
                key={feat}"""

content = content.replace(old_sec, new_sec)

# 6. Replace wallet features
old_wf = """{walletFeatures.map((f, i) => (
                      <motion.div
                        key={f}"""

new_wf = """{td('wallet.features').map((f, i) => (
                      <motion.div
                        key={f}"""

content = content.replace(old_wf, new_wf)

# 7. Fix Cards flow labels
content = content.replace(
    "border-blue-100'`}>Wallet</span>",
    "border-blue-100'`}>{t('prod.cards.wallet')}</span>"
)
content = content.replace(
    "border-violet-100'`}>QFSPay</span>",
    "border-violet-100'`}>{t('hero.qfspay')}</span>"
)
content = content.replace(
    "border-amber-100'`}>Cards</span>",
    "border-amber-100'`}>{t('prod.cards.title')}</span>"
)
content = content.replace(
    "border-teal-100'`}>Payments</span>",
    "border-teal-100'`}>{t('prod.cards.payments')}</span>"
)

# 8. Replace FAQ items
old_faq = """{faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className={`rounded-xl overflow-hidden border ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-gray-100'}`}
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                >
                  <AccordionItem value={`faq-${i}`} className="border-none">
                    <AccordionTrigger className={`px-6 py-4 text-left text-sm font-medium hover:no-underline hover:text-[#2563eb] transition-colors [&[data-state=open]]:text-[#2563eb] ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className={`px-6 pb-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}"""

new_faq = """{(() => {
                const faqData = td('faq.items');
                return Array.from({ length: faqData.length / 2 }, (_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className={`rounded-xl overflow-hidden border ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-gray-100'}`}
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.03)' }}
                >
                  <AccordionItem value={`faq-${i}`} className="border-none">
                    <AccordionTrigger className={`px-6 py-4 text-left text-sm font-medium hover:no-underline hover:text-[#2563eb] transition-colors [&[data-state=open]]:text-[#2563eb] ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                      {faqData[i * 2]}
                    </AccordionTrigger>
                    <AccordionContent className={`px-6 pb-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {faqData[i * 2 + 1]}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                ));
              })()}"""

content = content.replace(old_faq, new_faq)

with open('/home/z/my-project/src/components/qfs/home-page.tsx', 'w') as f:
    f.write(content)

print("home-page.tsx fixed successfully")
