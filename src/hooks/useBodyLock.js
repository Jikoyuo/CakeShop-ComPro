import { useEffect } from 'react';

// Locks body scroll while preserving scroll position across iOS Safari.
// Pairs with the body.lock rule in globals.css which reads --lock-top.
export function useBodyLock(active) {
  useEffect(() => {
    if (!active) return;
    const scrollY = window.scrollY;
    document.body.style.setProperty('--lock-top', `-${scrollY}px`);
    document.body.classList.add('lock');
    return () => {
      document.body.classList.remove('lock');
      document.body.style.removeProperty('--lock-top');
      window.scrollTo(0, scrollY);
    };
  }, [active]);
}
