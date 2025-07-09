// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;

      constructor() {
        const width = canvas?.width ?? 0;
        const height = canvas?.height ?? 0;

        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;

        const colors = ['#8b5cf6', '#ec4899', '#6366f1', '#a855f7'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        const width = canvas?.width ?? 0;
        const height = canvas?.height ?? 0;

        this.x += this.speedX;
        this.y += this.speedY;

        this.opacity = 0.3 + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.3;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = this.color;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      const width = canvas?.width ?? 0;
      const height = canvas?.height ?? 0;
      const numberOfParticles = Math.min(100, Math.floor((width * height) / 8000));

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      const width = canvas?.width ?? 0;
      const height = canvas?.height ?? 0;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.save();
            ctx.strokeStyle = `rgba(139, 92, 246, ${(150 - distance) / 150 * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
