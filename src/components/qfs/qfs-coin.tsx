'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export function QFSCoin({ size = 280, className = '' }: { size?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center justify-center ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseX.set(0); mouseY.set(0); }}
      style={{ perspective: 800, width: size + 60, height: size + 60 }}
    >
      {/* Outer quantum ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: '1.5px solid rgba(37,99,235,0.15)',
          rotateX, rotateY,
        }}
        animate={{
          boxShadow: hovered
            ? '0 0 60px rgba(37,99,235,0.2), 0 0 120px rgba(124,58,237,0.1), inset 0 0 60px rgba(37,99,235,0.05)'
            : '0 0 40px rgba(37,99,235,0.1), 0 0 80px rgba(124,58,237,0.05)',
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Orbiting electron 1 */}
      <motion.div
        className="absolute"
        style={{ width: size + 30, height: size + 30, rotateX, rotateY }}
      >
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: 'radial-gradient(circle, #60a5fa, #2563eb)',
            boxShadow: '0 0 10px #2563eb, 0 0 20px rgba(37,99,235,0.5)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          initial={{ top: 0, left: '50%', x: '-50%', y: 0 }}
        />
        {/* Orbit path */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(37,99,235,0.08)' }}
        />
      </motion.div>

      {/* Orbiting electron 2 */}
      <motion.div
        className="absolute"
        style={{ width: size + 10, height: size + 10, rotateX, rotateY }}
      >
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'radial-gradient(circle, #c084fc, #7c3aed)',
            boxShadow: '0 0 10px #7c3aed, 0 0 20px rgba(124,58,237,0.5)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          initial={{ bottom: 0, left: '50%', x: '-50%' }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(124,58,237,0.06)' }}
        />
      </motion.div>

      {/* Coin container */}
      <motion.div
        className="relative z-10"
        style={{ rotateX, rotateY, width: size, height: size }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {/* Coin glow background */}
        <motion.div
          className="absolute inset-[-20px] rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.3), rgba(245,158,11,0.15), transparent 70%)',
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Coin image */}
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            boxShadow: `
              0 0 30px rgba(251,191,36,0.3),
              0 0 60px rgba(251,191,36,0.15),
              0 8px 32px rgba(0,0,0,0.15),
              inset 0 2px 4px rgba(255,255,255,0.3)
            `,
          }}
          animate={hovered ? {
            boxShadow: `
              0 0 50px rgba(251,191,36,0.4),
              0 0 100px rgba(251,191,36,0.2),
              0 0 150px rgba(37,99,235,0.15),
              0 12px 48px rgba(0,0,0,0.2),
              inset 0 2px 4px rgba(255,255,255,0.3)
            `,
          } : {}}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/qfs-coin.png"
            alt="QFS Coin"
            width={size}
            height={size}
            className="w-full h-full object-cover"
            priority
          />
          {/* Shine overlay */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)',
            }}
          />
          {/* Animated shine sweep */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
          >
            <motion.div
              className="absolute -inset-full"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)',
              }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Energy particles around coin */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? '#60a5fa' : '#c084fc',
            boxShadow: i % 2 === 0
              ? '0 0 6px #60a5fa, 0 0 12px rgba(96,165,250,0.5)'
              : '0 0 6px #c084fc, 0 0 12px rgba(192,132,252,0.5)',
          }}
          animate={{
            x: [0, Math.cos(i * 1.05) * 20, 0],
            y: [0, Math.sin(i * 1.05) * 20, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
          initial={{
            left: `${50 + Math.cos(i * 1.05) * 48}%`,
            top: `${50 + Math.sin(i * 1.05) * 48}%`,
          }}
        />
      ))}
    </motion.div>
  );
}
