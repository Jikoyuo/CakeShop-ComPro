import { useState } from 'react';
import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';
import { FAQS } from '../data/content';

export function FAQ() {
  const [open, setOpen] = useState(0);
  const ref = useReveal();
  return (
    <section className="faq reveal" id="faq" ref={ref} data-screen-label="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-side">
            <div className="eyebrow">Pertanyaan</div>
            <h2>Sebelum<br/><em>pesan</em>.</h2>
            <p>
              Beberapa hal yang sering ditanyakan pelanggan. Kalau pertanyaanmu
              tidak ada di sini, langsung kontak kami — kami jawab dalam 2 jam kerja.
            </p>
            <div className="help">
              <b>Masih bingung?</b>
              <small>Ngobrol langsung dengan tim. Kami bantu rekomendasikan rasa & ukuran.</small>
              <a className="btn btn--primary" href="https://wa.me/6281200000000" target="_blank" rel="noopener">
                <Icon name="wa" size={16}/> Chat WhatsApp
              </a>
            </div>
          </div>

          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={'faq-item ' + (open === i ? 'is-open' : '')}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  {f.q}
                  <span className="ic"><Icon name="plus" size={14}/></span>
                </button>
                <div className="faq-a">
                  <div className="inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
