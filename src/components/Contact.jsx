import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';

export function Contact() {
  const ref = useReveal();
  return (
    <section className="contact reveal" id="kontak" ref={ref} data-screen-label="kontak">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-card-big">
            <div>
              <div className="eyebrow">Ayo mulai pesan</div>
              <h2>Punya momen <em>spesial</em>?<br/>Kami panggangkan.</h2>
            </div>
            <div className="ctas">
              <a className="btn btn--primary" href="https://wa.me/6281200000000" target="_blank" rel="noopener">
                <Icon name="wa" size={16}/> Pesan via WhatsApp
              </a>
              <a className="btn btn--ghost" href="#customize">Custom cake</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="ic"><Icon name="pin" size={18}/></div>
            <div className="label">Alamat toko</div>
            <div className="v">Jl. Cipaganti<br/>No. 142, Bandung</div>
            <small>Senin–Sabtu, dapur buka pukul 06.00</small>
          </div>

          <div className="contact-card">
            <div className="ic"><Icon name="clock" size={18}/></div>
            <div className="label">Jam toko</div>
            <div className="v">10.00 – 21.00</div>
            <small>Minggu tutup · libur nasional buka terbatas</small>
          </div>

          <div className="map-card">
            <svg className="map-bg" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M32 0H0v32" fill="none" stroke="#e6d5b8" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="800" height="300" fill="#f7ecd9"/>
              <rect width="800" height="300" fill="url(#map-grid)"/>
              <path d="M0 130 C140 80, 240 200, 400 150 S700 100, 800 170" stroke="#e8c4a0" strokeWidth="32" fill="none" opacity=".7"/>
              <path d="M0 130 C140 80, 240 200, 400 150 S700 100, 800 170" stroke="#fbf2e2" strokeWidth="24" fill="none"/>
              <path d="M120 0 V300" stroke="#e6d5b8" strokeWidth="18" opacity=".5"/>
              <path d="M600 0 V300" stroke="#e6d5b8" strokeWidth="14" opacity=".5"/>
              <path d="M0 230 L800 250" stroke="#e6d5b8" strokeWidth="10" opacity=".5"/>
              <circle cx="200" cy="60" r="40" fill="#e8c4a0" opacity=".25"/>
              <circle cx="660" cy="240" r="55" fill="#d97757" opacity=".15"/>
              <text x="160" y="80" fontFamily="'Caveat', cursive" fontSize="20" fill="#8a6d54">cipaganti</text>
              <text x="520" y="70" fontFamily="'Caveat', cursive" fontSize="18" fill="#8a6d54">setiabudhi</text>
              <text x="60" y="260" fontFamily="'Caveat', cursive" fontSize="18" fill="#8a6d54">dago</text>
            </svg>
            <div className="map-pin">
              <span className="dot"></span>
              Dhimas's Cake · Cipaganti 142
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
