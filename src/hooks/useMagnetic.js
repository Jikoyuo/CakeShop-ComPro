import { useEffect } from 'react';

export function useMagnetic() {
  useEffect(() => {
    if (matchMedia('(hover: none), (pointer: coarse)').matches) return;
    const buttons = document.querySelectorAll('[data-mag]');
    const handlers = [];
    buttons.forEach(btn => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width/2);
        const y = e.clientY - (r.top + r.height/2);
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
      };
      const onLeave = () => { btn.style.transform = ''; };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      handlers.push([btn, onMove, onLeave]);
    });
    return () => handlers.forEach(([b, m, l]) => {
      b.removeEventListener('mousemove', m);
      b.removeEventListener('mouseleave', l);
    });
  }, []);
}
