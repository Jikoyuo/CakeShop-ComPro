import { Stars } from './Decorations';
import { useReveal } from '../hooks/useReveal';
import { TESTIMONIALS } from '../data/content';

export function Testimoni() {
  const ref = useReveal();
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];
  return (
    <section className="testi reveal" id="testi" ref={ref} data-screen-label="testimoni">
      <div className="container">
        <div className="testi-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Suara pelanggan</div>
          <h2>Diceritakan oleh<br/>yang sudah <em>mencicipi</em>.</h2>
          <p>Lebih dari 12.000 kue terkirim ke pelanggan di Bandung dan sekitarnya. Berikut beberapa yang sempat menulis kembali.</p>
        </div>

        <div className="testi-rows">
          <div className="testi-row">
            <div className="testi-track">
              {row1.map((t, i) => (
                <div key={i} className={'testi-card ' + (i % 5 === 2 ? 'alt' : i % 5 === 4 ? 'alt2' : '')}>
                  <Stars n={t.rating}/>
                  <div className="quote">{t.quote}</div>
                  <div className="person">
                    <div className="avatar">{t.avatar}</div>
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="testi-row r2">
            <div className="testi-track">
              {row2.map((t, i) => (
                <div key={i} className={'testi-card ' + (i % 5 === 1 ? 'alt2' : i % 5 === 3 ? 'alt' : '')}>
                  <Stars n={t.rating}/>
                  <div className="quote">{t.quote}</div>
                  <div className="person">
                    <div className="avatar">{t.avatar}</div>
                    <div>
                      <div className="name">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="testi-rating">
          <div>
            <div className="stars" style={{ marginBottom: 8 }}><Stars n={5} size={18}/></div>
            <div className="num"><em>4.9</em><span style={{ color: 'var(--ink-3)', fontSize: '.5em' }}> /5</span></div>
          </div>
          <div className="info">
            Rata-rata rating dari <strong>1.240+</strong> review Google & Instagram.
            Terima kasih sudah memilih dapur kecil kami untuk momen besar Anda.
          </div>
        </div>
      </div>
    </section>
  );
}
