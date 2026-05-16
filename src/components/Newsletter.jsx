import { useState } from 'react';
import { Icon } from './Icon';
import { useReveal } from '../hooks/useReveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const ref = useReveal();
  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSent(true);
  };
  return (
    <section className="news reveal" ref={ref} data-screen-label="newsletter">
      <div className="container">
        <div className="news-card">
          <div>
            <div className="eyebrow">Newsletter</div>
            <h2>Resep, rilis batch,<br/><em>diskon</em> diam-diam.</h2>
            <p>
              Sebulan sekali kami kirim cerita dari dapur, jadwal seasonal
              menu, dan diskon kecil khusus pelanggan email. Tidak spam, janji.
            </p>
            <ul className="news-perks">
              <li><Icon name="check" size={14}/> Diskon 10% untuk order pertama</li>
              <li><Icon name="check" size={14}/> Akses preview menu musiman</li>
              <li><Icon name="check" size={14}/> Resep mini dari Chef Dhimas</li>
            </ul>
          </div>

          <form className="news-form" onSubmit={submit}>
            {sent ? (
              <div className="news-thanks">
                <Icon name="check" size={18}/> Terima kasih! Cek inbox dalam 1-2 hari.
              </div>
            ) : (
              <>
                <div className="news-row">
                  <input
                    type="email"
                    required
                    className="news-input"
                    placeholder="Nama Anda"
                  />
                </div>
                <div className="news-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="news-input"
                    placeholder="alamat@email.com"
                  />
                  <button className="btn btn--primary" type="submit">
                    <Icon name="send" size={14}/> Daftar
                  </button>
                </div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', marginTop: 4 }}>
                  Dengan mendaftar Anda setuju menerima email dari Dhimas's Cake. Unsubscribe kapan saja.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
