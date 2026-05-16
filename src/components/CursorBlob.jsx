import { useEffect, useRef } from 'react';

export function CursorBlob() {
  const ref = useRef(null);
  useEffect(() => {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    const el = ref.current; if (!el) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      el.classList.add('is-on');
      const t = e.target;
      const interactive = t.closest('a, button, .bi, .sig-card, .gi, .filter, .swatch, .size-btn, .chip, label, .step, .testi-card, .faq-q');
      el.classList.toggle('is-hover', !!interactive);
      const isText = t.closest('input, textarea, p, h1, h2, h3, h4');
      el.classList.toggle('is-text', !!isText && !interactive);
    };
    const onLeave = () => { el.classList.remove('is-on'); };
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return <div className="cursor-blob" ref={ref} aria-hidden="true"/>;
}
