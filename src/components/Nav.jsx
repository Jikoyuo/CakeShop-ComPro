import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { useScrollY } from '../hooks/useScrollY';

const NAV_ITEMS = [
  { href: '#story',     label: 'Cerita' },
  { href: '#menu',      label: 'Menu' },
  { href: '#signature', label: 'Signature' },
  { href: '#proses',    label: 'Proses' },
  { href: '#customize', label: 'Customize' },
  { href: '#testi',     label: 'Testimoni' },
  { href: '#kontak',    label: 'Kontak' },
];

export function Nav() {
  const y = useScrollY();
  const scrolled = y > 40;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('lock', open);
  }, [open]);
  return (
    <>
      <div className={'nav-wrap ' + (scrolled ? 'is-scrolled' : '')}>
        <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <nav className={'nav ' + (scrolled ? 'is-scrolled' : '')}>
            <a href="#top" className="brand">
              <div className="brand-mark">D</div>
              <div>
                <div className="brand-name">Dhimas's Cake</div>
                <small>artisan bakery · since 2018</small>
              </div>
            </a>
            <div className="nav-links desktop">
              {NAV_ITEMS.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
            </div>
            <div className="nav-cta">
              <a className="btn btn--primary" href="#kontak" data-mag>
                <Icon name="wa" size={16} /> <span className="lbl">Pesan</span>
              </a>
              <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(true)}>
                <Icon name="menu" size={18}/>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div className={'drawer-bd ' + (open ? 'is-open' : '')} onClick={() => setOpen(false)}></div>
      <aside className={'drawer ' + (open ? 'is-open' : '')}>
        <div className="drawer-head">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            <div className="brand-mark">D</div>
            <div className="brand-name">Dhimas's Cake</div>
          </a>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Tutup">
            <Icon name="close" size={16}/>
          </button>
        </div>
        {NAV_ITEMS.map((n, i) => (
          <a key={n.href} href={n.href} className="dl" onClick={() => setOpen(false)}>
            {n.label}
            <span className="num">0{i + 1}</span>
          </a>
        ))}
        <a className="btn btn--primary dr-cta" href="https://wa.me/6281200000000" target="_blank" rel="noopener">
          <Icon name="wa" size={16}/> Pesan via WhatsApp
        </a>
        <div className="dr-meta">
          Jl. Cipaganti 142, Bandung<br/>
          Senin–Sabtu · 10.00–21.00<br/>
          @dhimas.cake
        </div>
      </aside>
    </>
  );
}
