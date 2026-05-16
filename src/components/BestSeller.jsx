import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { useReveal } from '../hooks/useReveal';
import { fmtIDR } from '../utils/format';
import { PRODUCTS } from '../data/content';

export function BestSeller({ onOpen }) {
  const best = PRODUCTS.filter(p => p.bestseller);
  const ref = useReveal();
  return (
    <section className="signature reveal" id="signature" ref={ref} data-screen-label="signature">
      <div className="container">
        <div className="signature-head">
          <div>
            <div className="eyebrow">Signature</div>
            <h2>Yang paling <em>dicari</em><br/>tahun ini.</h2>
          </div>
          <div className="desc">
            Disusun dari order paling sering & rating tertinggi pelanggan
            sepanjang tahun. Geser untuk lihat semua.
          </div>
        </div>

        <div className="sig-rail no-bar">
          {best.map((p, i) => (
            <article key={p.id} className="sig-card" onClick={() => onOpen(p)}>
              <div className="photo">
                <CakeImg src={p.img} alt={p.name}/>
                <div className="rank">{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div className="body">
                <div className="tag">{p.tagline}</div>
                <h3>{p.name}</h3>
                <div className="meta">
                  <div className="price">{fmtIDR(p.price)}</div>
                  <div className="arr"><Icon name="arrowDR" size={18}/></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
