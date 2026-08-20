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
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'dot' | 'cube';
      rotation: number;
      rotationSpeed: number;
      cubeSize: number;
    }> = [];

    const colors = ['#2563eb', '#7c3aed', '#0d9488', '#db2777', '#06b6d4'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 30000));
      particles = Array.from({ length: count }, (_, idx) => {
        const isCube = idx < 6;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: isCube ? 0 : Math.random() * 2 + 1,
          opacity: isCube ? Math.random() * 0.06 + 0.03 : Math.random() * 0.25 + 0.08,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: isCube ? 'cube' as const : 'dot' as const,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005,
          cubeSize: Math.random() * 30 + 20,
        };
      });
    };

    const drawGrid = () => {
      // Subtle dot grid (like reference image)
      const gridSize = 40;
      ctx.fillStyle = 'rgba(37, 99, 235, 0.04)';
      for (let x = gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridSize; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const drawCube = (p: typeof particles[0]) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      const s = p.cubeSize;
      const half = s / 2;

      // Front face
      ctx.fillStyle = p.color + '15';
      ctx.strokeStyle = p.color + '30';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(-half, -half, s, s);
      ctx.fill();
      ctx.stroke();

      // Top face (parallelogram)
      const offset = s * 0.3;
      ctx.fillStyle = p.color + '10';
      ctx.strokeStyle = p.color + '20';
      ctx.beginPath();
      ctx.moveTo(-half, -half);
      ctx.lineTo(-half + offset, -half - offset);
      ctx.lineTo(half + offset, -half - offset);
      ctx.lineTo(half, -half);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Right face
      ctx.fillStyle = p.color + '0d';
      ctx.strokeStyle = p.color + '18';
      ctx.beginPath();
      ctx.moveTo(half, -half);
      ctx.lineTo(half + offset, -half - offset);
      ctx.lineTo(half + offset, half - offset);
      ctx.lineTo(half, half);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Inner grid lines on front face
      ctx.strokeStyle = p.color + '18';
      ctx.lineWidth = 0.5;
      const lines = 3;
      for (let i = 1; i < lines; i++) {
        const pos = -half + (s / lines) * i;
        ctx.beginPath();
        ctx.moveTo(pos, -half);
        ctx.lineTo(pos, half);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-half, pos);
        ctx.lineTo(half, pos);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const drawConnections = () => {
      const dots = particles.filter(p => p.type === 'dot');
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawGlowOrbs = () => {
      // Subtle ambient glow orbs
      const orbs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.3, r: 200, color: 'rgba(37, 99, 235, 0.03)' },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, r: 250, color: 'rgba(124, 58, 237, 0.025)' },
        { x: canvas.width * 0.6, y: canvas.height * 0.7, r: 180, color: 'rgba(6, 182, 212, 0.025)' },
        { x: canvas.width * 0.3, y: canvas.height * 0.8, r: 220, color: 'rgba(219, 39, 119, 0.02)' },
      ];
      orbs.forEach(orb => {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(orb.x - orb.r, orb.y - orb.r, orb.r * 2, orb.r * 2);
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGlowOrbs();
      drawGrid();

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        if (p.type === 'cube') {
          drawCube(p);
        } else {
          // Subtle dot with soft glow
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Soft glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          grad.addColorStop(0, p.color + '15');
          grad.addColorStop(1, p.color + '00');
          ctx.fillStyle = grad;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}