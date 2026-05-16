import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="footer" data-screen-label="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <a href="#top" className="brand">
              <div className="brand-mark">D</div>
              <div>
                <div className="brand-name">Dhimas's Cake</div>
              </div>
            </a>
            <p>Dapur kecil dengan resep dan waktu yang sabar. Memanggang buat momen yang patut diingat sejak 2018.</p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><Icon name="ig" size={16}/></a>
              <a href="#" aria-label="WhatsApp"><Icon name="wa" size={16}/></a>
              <a href="#" aria-label="Phone"><Icon name="phone" size={16}/></a>
            </div>
          </div>
          <div>
            <h5>Menu</h5>
            <ul>
              <li><a href="#menu">Birthday cake</a></li>
              <li><a href="#menu">Wedding cake</a></li>
              <li><a href="#menu">Korean cake</a></li>
              <li><a href="#menu">Dessert box</a></li>
              <li><a href="#menu">Sourdough & roti</a></li>
            </ul>
          </div>
          <div>
            <h5>Layanan</h5>
            <ul>
              <li><a href="#customize">Custom cake</a></li>
              <li><a href="#kontak">Tasting session</a></li>
              <li><a href="#kontak">Corporate hampers</a></li>
              <li><a href="#kontak">Pengiriman</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Kontak</h5>
            <ul>
              <li><a href="#">Jl. Cipaganti 142, Bandung</a></li>
              <li><a href="https://wa.me/6281200000000">+62 812 0000 0000</a></li>
              <li><a href="mailto:hi@dhimascake.id">hi@dhimascake.id</a></li>
              <li><a href="#">@dhimas.cake</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Dhimas's Cake — Semua hak cipta dilindungi.</div>
          <div>Dipanggang dengan <span className="heart">♥</span> di Bandung.</div>
        </div>
      </div>
    </footer>
  );
}
