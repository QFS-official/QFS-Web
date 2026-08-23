import {
  Atom, Shield, Eye, Network, Cpu, CreditCard, Wallet,
  ArrowRightLeft, Landmark, Globe, Bot, Lightbulb,
} from 'lucide-react';

/* Only visual/style data — all text comes from lang-store via useTD() */

export const ecosystemCardStyles = [
  { bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/50', icon: <Atom className="w-6 h-6 text-[#2563eb]" /> },
  { bgColor: 'bg-gradient-to-br from-violet-50 to-violet-100/50', icon: <CreditCard className="w-6 h-6 text-[#7c3aed]" /> },
  { bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100/50', icon: <Wallet className="w-6 h-6 text-[#0d9488]" /> },
  { bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100/50', icon: <ArrowRightLeft className="w-6 h-6 text-[#db2777]" /> },
  { bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100/50', icon: <CreditCard className="w-6 h-6 text-[#d97706]" /> },
  { bgColor: 'bg-gradient-to-br from-sky-50 to-sky-100/50', icon: <Landmark className="w-6 h-6 text-[#2563eb]" /> },
  { bgColor: 'bg-gradient-to-br from-indigo-50 to-violet-50', icon: <Globe className="w-6 h-6 text-[#2563eb]" /> },
  { bgColor: 'bg-gradient-to-br from-rose-50 to-violet-50', icon: <Bot className="w-6 h-6 text-[#db2777]" /> },
];

export const pillarIcons = [
  <Shield className="w-6 h-6" />,
  <Eye className="w-6 h-6" />,
  <Network className="w-6 h-6" />,
  <Cpu className="w-6 h-6" />,
  <Lightbulb className="w-6 h-6" />,
];
