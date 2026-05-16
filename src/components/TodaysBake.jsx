import { useEffect, useMemo, useState } from 'react';
import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { PRODUCTS } from '../data/content';

const PEEK_KEY = 'dhimas-peek-dismissed';

export function TodaysBake({ onOpen }) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try { return sessionStorage.getItem(PEEK_KEY) === '1'; } catch (e) { return false; }
  });

  const product = useMemo(() => {
    const d = new Date();
    const idx = (d.getDate() + d.getMonth()) % PRODUCTS.length;
    return PRODUCTS[idx];
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShow(true), 3200);
    return () => clearTimeout(t);
  }, [dismissed]);

  const dismiss = (e) => {
    e?.stopPropagation();
    setShow(false);
    try { sessionStorage.setItem(PEEK_KEY, '1'); } catch (err) {}
  };

  if (dismissed) return null;

  return (
    <div
      className={'peek ' + (show ? 'is-in' : '')}
      onClick={() => { onOpen(product); dismiss(); }}
      role="button"
      aria-label="Today's bake"
    >
      <button className="x" onClick={dismiss} aria-label="Tutup">
        <Icon name="close" size={12}/>
      </button>
      <div className="peek-img"><CakeImg src={product.img} alt={product.name}/></div>
      <div className="peek-body">
        <div className="tag"><span className="dot"></span> Baru keluar oven</div>
        <h4>{product.name}</h4>
        <small>{product.tagline}</small>
      </div>
    </div>
  );
}
