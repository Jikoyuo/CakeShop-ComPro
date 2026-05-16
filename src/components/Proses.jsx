import { CakeImg } from './CakeImg';
import { useReveal } from '../hooks/useReveal';

const STEPS = [
  {
    tag: 'Hari -3',
    title: 'Brief & konsultasi',
    body: 'Cerita momenmu, rasa favorit, tema warna. Kami kirim rekomendasi rasa, ukuran, dan moodboard.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop',
  },
  {
    tag: 'Hari -2',
    title: 'Belanja bahan',
    body: 'Tepung dari Cimahi, butter Eropa, telur ayam kampung. Hanya yang segar yang lolos.',
    img: 'https://images.unsplash.com/photo-1574087631498-93e7d2a431d6?w=700&q=80&auto=format&fit=crop',
  },
  {
    tag: 'Hari -1',
    title: 'Sponge & filling',
    body: 'Mengaduk perlahan, oven 165°C, istirahatkan semalam. Filling dimasak terpisah, didinginkan.',
    img: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=700&q=80&auto=format&fit=crop',
  },
  {
    tag: 'Hari H',
    title: 'Dekor & antar',
    body: 'Frosting dirakit pagi, dekorasi tangan, packaging linen. Siap antar dengan box ber-suhu.',
    img: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=700&q=80&auto=format&fit=crop',
  },
];

export function Proses() {
  const ref = useReveal();
  return (
    <section className="proses reveal" id="proses" ref={ref} data-screen-label="proses">
      <div className="container">
        <div className="proses-head">
          <div>
            <div className="eyebrow">Dari brief ke meja</div>
            <h2>Empat hari yang<br/><em>tidak diburu-buru</em>.</h2>
          </div>
          <div className="desc">
            Karena setiap kue butuh waktunya. Kami atur jadwal dari konsultasi
            sampai antar — biar ketika sampai di tangan Anda, rasanya seperti
            baru keluar oven.
          </div>
        </div>

        <div className="proses-rail">
          {STEPS.map((s, i) => (
            <article key={i} className="step">
              <div className="ph">
                <CakeImg src={s.img} alt={s.title}/>
              </div>
              <div className="tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
