import { useEffect, useRef } from "react";

type P = { x: number; y: number; vx: number; vy: number; life: number };

/**
 * Subtle glowing particle network that lives only around the cursor.
 * Particles fade in near the pointer, connect with thin lines and
 * dissolve when the pointer stops or leaves.
 */
export function CursorNetwork() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: P[] = [];
    const pointer = { x: -9999, y: -9999, active: false, moving: 0 };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      pointer.moving = 1;
      if (particles.length < 26 && Math.random() > 0.35) {
        const a = Math.random() * Math.PI * 2;
        const r = 18 + Math.random() * 70;
        particles.push({
          x: e.clientX + Math.cos(a) * r,
          y: e.clientY + Math.sin(a) * r,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          life: 0,
        });
      }
    };
    const onLeave = () => {
      pointer.active = false;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    let raf = 0;
    const render = () => {
      raf = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);
      pointer.moving *= 0.965;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        // gentle attraction so the cloud follows the cursor
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (pointer.active) {
          p.vx += (dx / dist) * (dist > 90 ? 0.05 : -0.02);
          p.vy += (dy / dist) * (dist > 90 ? 0.05 : -0.02);
        }
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.016;

        const proximity = Math.max(0, 1 - dist / 170);
        const alpha = Math.min(1, p.life * 3) * proximity * (0.3 + pointer.moving * 0.7);
        if (alpha <= 0.01 && p.life > 0.4) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 200, 214, ${alpha * 0.9})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 96) continue;
          const near = Math.max(
            0,
            1 - Math.hypot(pointer.x - (a.x + b.x) / 2, pointer.y - (a.y + b.y) / 2) / 170,
          );
          const alpha = (1 - d / 96) * near * (0.18 + pointer.moving * 0.42);
          if (alpha <= 0.01) continue;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(94, 200, 214, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
    />
  );
}
