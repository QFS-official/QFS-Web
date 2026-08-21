---
Task ID: 1
Agent: Super Z (main)
Task: Fix all subtitle colors for dark mode readability across all QFS website pages

Work Log:
- Analyzed uploaded screenshot showing "POR QUÉ QFS" subtitle invisible in dark mode
- Identified root cause: Tailwind v4 `text-[#color]/50` opacity classes not being overridden by CSS `.dark .sub-label` rules
- Identified 3 categories of issues: (A) sub-label CSS specificity, (B) static text-slate-* in whitepaper/portal/roadmap, (C) static bg/border colors
- Strengthened CSS sub-label selectors from `.dark .sub-label` to `html.dark span.sub-label` etc., removed `opacity` property
- Added comprehensive global CSS rules: text-slate-500→#94a3b8, text-slate-600→#cbd5e1, text-slate-800→#e2e8f0, text-slate-900→#f1f5f9
- Added CSS rules for bg-white, border-gray-100, bg-blue-50, bg-amber-50, bg-slate-50 in dark mode
- Added inline isDark conditionals for header badges (whitepaper, portal, roadmap)
- Added inline isDark conditionals for TOC cards, section headings, boxShadow (whitepaper)
- Fixed roadmap timeline dot background and card boxShadow for dark mode
- Removed invalid CSS selectors with `/50` opacity syntax
- Build verified clean, pushed to GitHub

Stage Summary:
- All subtitles, descriptions, headings, and content text now readable in dark mode
- CSS approach handles 90% of cases globally without touching component JSX
- Critical elements (section badges, boxShadow) use inline isDark conditionals
- Commit 41dfd2f pushed to QFS-official/QFS-Web
