#!/usr/bin/env python3
"""Fix footer.tsx translations."""

with open('/home/z/my-project/src/components/qfs/footer.tsx', 'r') as f:
    content = f.read()

# 1. Products list
old_products = """            {['QFS Wallet', 'QFSPay', 'QFS Exchange DEX', 'QFS Quantum Cards', 'QFS AI'].map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}"""
new_products = """            {td('foot.products.list').map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}"""
content = content.replace(old_products, new_products)

# 2. Resources list
old_resources = """            {['White Paper', 'Roadmap', 'Technical Documentation', 'APIs', 'NESG Community'].map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}"""
new_resources = """            {td('foot.resources.list').map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}"""
content = content.replace(old_resources, new_resources)

# 3. Alliances list
old_alliances = """            {['GCRM Alliance', 'Al Arab', 'Government Currencies', 'CBDCs', 'Global Network'].map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}"""
new_alliances = """            {td('foot.alliances.list').map((item) => (
                <div key={item} className={`text-xs transition-colors cursor-default ${isDark ? 'text-slate-500 hover:text-blue-400' : 'text-slate-400 hover:text-[#2563eb]'}`}>
                  {item}
                </div>
              ))}"""
content = content.replace(old_alliances, new_alliances)

# 4. Fix import
content = content.replace(
    'import { useT } from',
    'import { useT, useTD } from'
)

# 5. Add td to component
content = content.replace(
    '  const t = useT();',
    '  const t = useT();\n  const td = useTD();'
)

with open('/home/z/my-project/src/components/qfs/footer.tsx', 'w') as f:
    f.write(content)

print('footer.tsx fixed successfully')