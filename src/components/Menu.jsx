import { useMemo, useState } from 'react';
import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { useReveal } from '../hooks/useReveal';
import { fmtIDR } from '../utils/format';
import { CATEGORIES, PRODUCTS } from '../data/content';

export function Menu({ layout, onOpen }) {
  const [cat, setCat] = useState('all');
  const ref = useReveal();

  const items = useMemo(
    () => PRODUCTS.filter(p => cat === 'all' || p.cat === cat),
    [cat]
  );

  return (
    <section className="menu reveal" id="menu" ref={ref} data-screen-label="menu">
      <div className="container">
        <div className="menu-head">
          <div>
            <div className="eyebrow">Katalog produk</div>
            <h2>Pilih dari <em>oven</em><br/>hari ini.</h2>
          </div>
          <div className="desc">
            Hover untuk lihat detail, klik untuk buka cerita & pesan.
            Semua kue dipanggang by-order. Untuk request rasa khusus,
            silakan tulis di brief.
          </div>
        </div>

        <div className="filters" role="tablist">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={'filter ' + (cat === c.id ? 'is-on' : '')}
              onClick={() => setCat(c.id)}
              role="tab"
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className={'bento layout-' + layout} key={cat}>
          {items.map((p, i) => (
            <article
              key={p.id}
              className={'bi bi-' + p.span}
              style={{ animationDelay: (i * 35) + 'ms' }}
              onClick={() => onOpen(p)}
            >
              <CakeImg src={p.img} alt={p.name} />
              {p.bestseller && (
                <div className="bi-tag"><Icon name="star" size={11}/> Best seller</div>
              )}
              <div className="bi-hover"><Icon name="arrowDR" size={16}/></div>
              <div className="bi-meta">
                <div>
                  <span className="ttl">{p.tagline}</span>
                  <h3>{p.name}</h3>
                </div>
                <div className="price">{fmtIDR(p.price)}</div>
              </div>
            </article>
          ))}
          {items.length === 0 && (
            <div className="bento-empty">
              <Icon name="cake" size={32}/>
              <p>Belum ada produk untuk kategori ini.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
