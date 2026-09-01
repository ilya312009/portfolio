import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates for gentle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Generate Stars
    let stars: Star[] = [];
    const colors = ['#ffffff', '#e0f2fe', '#bae6fd', '#93c5fd', '#60a5fa', '#a78bfa'];

    const initStars = () => {
      const starCount = Math.floor((width * height) / 4500); // Dynamic based on screen size
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const baseAlpha = Math.random() * 0.7 + 0.3;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.4,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    initStars();

    // Shooting Stars
    const shootingStars: ShootingStar[] = [];
    const createShootingStar = () => {
      const startX = Math.random() * width * 1.2;
      const startY = Math.random() * (height * 0.4);
      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 12,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), // ~45 deg
        opacity: 1,
        active: true
      });
    };

    let nextShootingStarTime = Date.now() + Math.random() * 3000 + 2000;

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      ctx.clearRect(0, 0, width, height);

      // Draw background space gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 3, 50,
        width / 2, height / 2, Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#0a1128');
      bgGrad.addColorStop(0.5, '#040817');
      bgGrad.addColorStop(1, '#02040a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Twinkling Stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        // apply slight parallax according to star size (depth)
        const px = star.x + offsetX * star.size;
        const py = star.y + offsetY * star.size;
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow on larger stars
        if (star.size > 1.4) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#2c67ed';
          ctx.fill();
        }
        ctx.restore();
      });

      // Manage Shooting Stars
      const now = Date.now();
      if (now > nextShootingStarTime) {
        createShootingStar();
        nextShootingStarTime = now + Math.random() * 6000 + 4000;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        if (!s.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        grad.addColorStop(0.3, `rgba(44, 103, 237, ${s.opacity * 0.8})`);
        grad.addColorStop(1, `rgba(44, 103, 237, 0)`);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0 || s.x > width + 200 || s.y > height + 200) {
          s.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for stars and shooting stars */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Ambient Cosmic Nebula Glow Orbs */}
      <div 
        className="absolute -top-40 left-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full blur-[130px] opacity-25"
        style={{ background: 'radial-gradient(circle, #2c67ed 0%, rgba(44, 103, 237, 0) 70%)' }}
      />
      <div 
        className="absolute top-1/3 -right-40 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full blur-[140px] opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, rgba(124, 58, 237, 0) 70%)' }}
      />
      <div 
        className="absolute bottom-10 left-1/3 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, #1d4ed8 0%, rgba(29, 78, 216, 0) 70%)' }}
      />
    </div>
  );
};
