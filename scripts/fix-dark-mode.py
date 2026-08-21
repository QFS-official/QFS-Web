import re

# ===== 1. Fix globals.css =====
with open('/home/z/my-project/src/app/globals.css', 'r') as f:
    css = f.read()

old_block = '''/* Subtitle labels - bright in dark mode */
.dark .sub-label {
  color: #60a5fa !important;
  opacity: 0.85 !important;
}
.dark .sub-label-purple {
  color: #a78bfa !important;
  opacity: 0.85 !important;
}
.dark .sub-label-teal {
  color: #2dd4bf !important;
  opacity: 0.85 !important;
}
.dark .sub-label-amber {
  color: #fbbf24 !important;
  opacity: 0.85 !important;
}
.dark .sub-label-pink {
  color: #f472b6 !important;
  opacity: 0.85 !important;
}
.dark .sub-label-indigo {
  color: #818cf8 !important;
  opacity: 0.85 !important;
}'''

new_block = '''/* Subtitle labels - bright in dark mode */
html.dark .sub-label,
html.dark span.sub-label,
html.dark div.sub-label,
html.dark motion.span.sub-label {
  color: #93bbfd !important;
}
html.dark .sub-label-purple,
html.dark span.sub-label-purple {
  color: #c4b5fd !important;
}
html.dark .sub-label-teal,
html.dark span.sub-label-teal {
  color: #5eead4 !important;
}
html.dark .sub-label-amber,
html.dark span.sub-label-amber {
  color: #fcd34d !important;
}
html.dark .sub-label-pink,
html.dark span.sub-label-pink {
  color: #f9a8d4 !important;
}
html.dark .sub-label-indigo,
html.dark span.sub-label-indigo {
  color: #a5b4fc !important;
}'''

css = css.replace(old_block, new_block)

with open('/home/z/my-project/src/app/globals.css', 'w') as f:
    f.write(css)
print('OK: globals.css')


def fix_file(path, replacements):
    """Apply a list of (old_str, new_str) replacements to a file."""
    with open(path, 'r') as f:
        content = f.read()
    for old, new in replacements:
        if old not in content:
            print(f'  WARN: not found: {old[:60]}...')
        content = content.replace(old, new, 1)
    with open(path, 'w') as f:
        f.write(content)
    print(f'OK: {path}')
    return len(replacements)


# ===== 2. Fix whitepaper-page.tsx =====
wp_fixes = [
    # Header badge
    (
        'className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#7c3aed] border border-violet-200 bg-violet-50/80"',
        'className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? \'text-violet-300 border-violet-700/50 bg-violet-500/10\' : \'text-[#7c3aed] border-violet-200 bg-violet-50/80\'}`}'
    ),
    # Header description
    (
        'className="text-slate-500 max-w-2xl mx-auto leading-relaxed"',
        'className={`max-w-2xl mx-auto leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}'
    ),
    # Header meta
    (
        'className="flex items-center justify-center gap-4 mt-6 text-xs text-slate-400"',
        'className={`flex items-center justify-center gap-4 mt-6 text-xs ${isDark ? \'text-slate-500\' : \'text-slate-400\'}`}'
    ),
    # Separators
    (
        '<span className="text-gray-200">|</span>\n            <span>Agosto 2026</span>\n            <span className="text-gray-200">|</span>',
        '<span className={isDark ? \'text-slate-600\' : \'text-gray-200\'}>|</span>\n            <span>Agosto 2026</span>\n            <span className={isDark ? \'text-slate-600\' : \'text-gray-200\'}>|</span>'
    ),
    # TOC item text
    (
        '<span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">{item.title}</span>',
        '<span className={`text-sm transition-colors ${isDark ? \'text-slate-300 group-hover:text-white\' : \'text-slate-600 group-hover:text-slate-900\'}`}>{item.title}</span>'
    ),
]
fix_file('/home/z/my-project/src/components/qfs/whitepaper-page.tsx', wp_fixes)


# ===== 3. Fix portal-page.tsx =====
pp_fixes = [
    # Header badge
    (
        'className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#d97706] border border-amber-200 bg-amber-50/80"',
        'className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? \'text-amber-300 border-amber-700/50 bg-amber-500/10\' : \'text-[#d97706] border-amber-200 bg-amber-50/80\'}`}'
    ),
    # Header desc
    (
        'className="text-slate-500 max-w-2xl mx-auto leading-relaxed"\n          >\n            The official government portal',
        'className={`max-w-2xl mx-auto leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}\n          >\n            The official government portal'
    ),
    # G20 desc
    (
        '<motion.p variants={fadeUp} className="text-slate-500">\n              Supporting',
        '<motion.p variants={fadeUp} className={isDark ? \'text-slate-400\' : \'text-slate-500\'}>\n              Supporting'
    ),
    # About heading
    (
        '<h2 className="text-xl font-bold text-slate-900">A New Digital Infrastructure for Global Finance</h2>',
        '<h2 className={`text-xl font-bold ${isDark ? \'text-white\' : \'text-slate-900\'}`}>A New Digital Infrastructure for Global Finance</h2>'
    ),
    # QFSpay heading
    (
        '<h2 className="text-xl font-bold text-slate-900">QFSpay</h2>',
        '<h2 className={`text-xl font-bold ${isDark ? \'text-white\' : \'text-slate-900\'}`}>QFSpay</h2>'
    ),
    # Tech section desc
    (
        '<motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto">\n              The QFS combines',
        '<motion.p variants={fadeUp} className={`max-w-2xl mx-auto ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}>\n              The QFS combines'
    ),
    # Currencies heading
    (
        '<h2 className="text-xl font-bold text-slate-900">Supported Sovereign Currencies</h2>',
        '<h2 className={`text-xl font-bold ${isDark ? \'text-white\' : \'text-slate-900\'}`}>Supported Sovereign Currencies</h2>'
    ),
    # Currencies desc
    (
        '<motion.p variants={fadeUp} className="text-slate-500 mb-8 max-w-3xl leading-relaxed">\n              QFS provides',
        '<motion.p variants={fadeUp} className={`mb-8 max-w-3xl leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}>\n              QFS provides'
    ),
    # Partners heading
    (
        '<h2 className="text-xl font-bold text-slate-900">Government Partners</h2>',
        '<h2 className={`text-xl font-bold ${isDark ? \'text-white\' : \'text-slate-900\'}`}>Government Partners</h2>'
    ),
    # Partners desc
    (
        '<motion.p variants={fadeUp} className="text-slate-500 mb-8 max-w-3xl leading-relaxed">\n              QFS and QFSpay',
        '<motion.p variants={fadeUp} className={`mb-8 max-w-3xl leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}>\n              QFS and QFSpay'
    ),
    # CTA desc
    (
        '<motion.p variants={fadeUp} className="text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">',
        '<motion.p variants={fadeUp} className={`max-w-xl mx-auto mb-8 leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}>'
    ),
]
fix_file('/home/z/my-project/src/components/qfs/portal-page.tsx', pp_fixes)


# ===== 4. Fix roadmap-page.tsx =====
rm_fixes = [
    # Header badge
    (
        'className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#0d9488] border border-teal-200 bg-teal-50/80"',
        'className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest border ${isDark ? \'text-teal-300 border-teal-700/50 bg-teal-500/10\' : \'text-[#0d9488] border-teal-200 bg-teal-50/80\'}`}'
    ),
    # Header desc
    (
        'className="text-slate-500 max-w-2xl mx-auto leading-relaxed"\n          >\n            Desarrollo progresivo',
        'className={`max-w-2xl mx-auto leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}\n          >\n            Desarrollo progresivo'
    ),
    # Phase description
    (
        '<p className="text-sm text-slate-500 mb-4 leading-relaxed">{phase.description}</p>',
        '<p className={`text-sm mb-4 leading-relaxed ${isDark ? \'text-slate-400\' : \'text-slate-500\'}`}>{phase.description}</p>'
    ),
    # Phase title
    (
        '<h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>',
        '<h3 className={`text-lg font-bold ${isDark ? \'text-white\' : \'text-slate-900\'}`}>{phase.title}</h3>'
    ),
    # Phase items
    (
        '<div key={item} className="flex items-center gap-2 text-sm text-slate-600">',
        '<div key={item} className={`flex items-center gap-2 text-sm ${isDark ? \'text-slate-300\' : \'text-slate-600\'}`}'
    ),
    # Ecosystem node name
    (
        '<div className="text-sm font-semibold text-slate-800">{node.name}</div>',
        '<div className={`text-sm font-semibold ${isDark ? \'text-white\' : \'text-slate-800\'}`}>{node.name}</div>'
    ),
    # Arrow
    (
        '<ArrowRight className="w-4 h-4 text-gray-200 rotate-90" />',
        '<ArrowRight className={`w-4 h-4 rotate-90 ${isDark ? \'text-slate-600\' : \'text-gray-200\'}`} />'
    ),
    # Timeline vertical line
    (
        'className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-violet-200 to-pink-200"',
        'className={`absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 ${isDark ? \'bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-pink-500/30\' : \'bg-gradient-to-b from-blue-200 via-violet-200 to-pink-200\'}`}'
    ),
    # Non-active dot bg
    (
        "background: phase.status === 'active' ? `true` : '#f8fafc',",
        "background: phase.status === 'active' ? `true` : (isDark ? '#1e293b' : '#f8fafc'),"
    ),
    # Timeline card
    (
        'className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] bg-white rounded-2xl p-6 relative overflow-hidden border border-gray-100 ${',
        'className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] rounded-2xl p-6 relative overflow-hidden border ' + (isDark ? 'bg-slate-800/90 border-slate-700/60' : 'bg-white border-gray-100') + ' ${'
    ),
    # Timeline card shadow
    (
        "style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.02)' }}",
        "style={{ boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.02)' }}"
    ),
]
fix_file('/home/z/my-project/src/components/qfs/roadmap-page.tsx', rm_fixes)

print('\nDone! All dark mode fixes applied.')