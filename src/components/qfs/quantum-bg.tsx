'use client';

import { useEffect, useRef } from 'react';

export function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    // Floating orbs
    const orbs = [
      { x: 0.15, y: 0.25, r: 300, color: [37, 99, 235], speed: 0.0003, phase: 0 },
      { x: 0.8, y: 0.15, r: 350, color: [124, 58, 237], speed: 0.00025, phase: 2 },
      { x: 0.6, y: 0.7, r: 280, color: [6, 182, 212], speed: 0.00035, phase: 4 },
      { x: 0.25, y: 0.8, r: 320, color: [219, 39, 119], speed: 0.0002, phase: 1 },
      { x: 0.5, y: 0.4, r: 400, color: [37, 99, 235], speed: 0.00015, phase: 3 },
    ];

    // Quantum particles
    const particles: Array<{
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      color: string;
      pulseSpeed: number; pulsePhase: number;
    }> = [];

    // Quantum wave lines
    const waveLines = [
      { y: 0.3, amplitude: 40, frequency: 0.003, speed: 0.0008, color: 'rgba(37,99,235,0.04)', width: 1 },
      { y: 0.5, amplitude: 30, frequency: 0.004, speed: 0.0006, color: 'rgba(124,58,237,0.03)', width: 1.5 },
      { y: 0.7, amplitude: 35, frequency: 0.0035, speed: 0.0007, color: 'rgba(6,182,212,0.03)', width: 1 },
      { y: 0.85, amplitude: 25, frequency: 0.005, speed: 0.001, color: 'rgba(219,39,119,0.025)', width: 0.8 },
    ];

    const colors = ['#2563eb', '#7c3aed', '#0d9488', '#db2777', '#06b6d4', '#60a5fa'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 40000));
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulseSpeed: Math.random() * 0.002 + 0.001,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawOrbs = () => {
      orbs.forEach((orb) => {
        const cx = orb.x * canvas.width + Math.sin(time * orb.speed * 1000 + orb.phase) * 80;
        const cy = orb.y * canvas.height + Math.cos(time * orb.speed * 800 + orb.phase) * 60;
        const r = orb.r + Math.sin(time * orb.speed * 500) * 30;
        const [cr, cg, cb] = orb.color;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},0.06)`);
        grad.addColorStop(0.4, `rgba(${cr},${cg},${cb},0.03)`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
      });
    };

    const drawWaves = () => {
      waveLines.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width;
        const baseY = wave.y * canvas.height;
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = baseY +
            Math.sin(x * wave.frequency + time * wave.speed * 1000) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 500) * wave.amplitude * 0.5;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    };

    const drawGrid = () => {
      const gridSize = 60;
      const offset = (time * 0.01) % gridSize;
      ctx.fillStyle = 'rgba(37, 99, 235, 0.025)';
      for (let x = -gridSize + offset; x < canvas.width + gridSize; x += gridSize) {
        for (let y = -gridSize + offset; y < canvas.height + gridSize; y += gridSize) {
          const distX = Math.abs(x - canvas.width / 2) / (canvas.width / 2);
          const distY = Math.abs(y - canvas.height / 2) / (canvas.height / 2);
          const alpha = 0.025 * (1 - (distX + distY) * 0.3);
          if (alpha > 0.005) {
            ctx.globalAlpha = alpha / 0.025;
            ctx.beginPath();
            ctx.arc(x, y, 0.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = 0.06 * (1 - dist / 150);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Quantum jitter
        p.x += Math.sin(time * 0.003 + p.pulsePhase) * 0.15;
        p.y += Math.cos(time * 0.002 + p.pulsePhase) * 0.15;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        const pulse = 0.5 + 0.5 * Math.sin(time * p.pulseSpeed * 1000 + p.pulsePhase);
        const currentOpacity = p.opacity * (0.6 + pulse * 0.4);
        const currentSize = p.size * (0.8 + pulse * 0.4);

        // Glow
        ctx.globalAlpha = currentOpacity * 0.3;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize * 6);
        grad.addColorStop(0, p.color + '30');
        grad.addColorStop(1, p.color + '00');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawOrbs();
      drawWaves();
      drawGrid();
      drawConnections();
      drawParticles();

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
