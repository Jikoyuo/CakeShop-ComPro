import { useEffect, useRef } from 'react';

export function useMouseParallax(strength = 12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width/2)) / r.width;
      const py = (e.clientY - (r.top  + r.height/2)) / r.height;
      tx = px * strength; ty = py * strength;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const loop = () => {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      el.querySelectorAll('[data-parallax]').forEach(n => {
        const f = parseFloat(n.dataset.parallax || '1');
        n.style.transform = `translate3d(${cx*f}px, ${cy*f}px, 0)`;
      });
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
        raf = requestAnimationFrame(loop);
      } else raf = 0;
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [strength]);
  return ref;
}
