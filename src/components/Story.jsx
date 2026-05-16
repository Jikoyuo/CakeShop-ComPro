import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { useReveal } from '../hooks/useReveal';

export function Story() {
  const ref = useReveal();
  return (
    <section className="story reveal" id="story" ref={ref} data-screen-label="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-text">
            <div className="eyebrow">Tentang kami</div>
            <h2>Resep <em>nenek</em>,<br/>oven yang sabar.</h2>
            <p>
              Dhimas's Cake mulai dari dapur kecil di Cipaganti tahun 2018.
              Cuma satu prinsip yang dijaga sampai sekarang: bahan utuh,
              waktu yang cukup, dan tangan yang bersih. Tidak ada premix,
              tidak ada bahan instan — semua diaduk, ditimbang, dan dipanggang
              hari ini juga.
            </p>
            <p>
              Setiap minggu kami memanggang batch kecil supaya bisa
              memperhatikan tiap loyang. Karena kue terbaik itu yang
              dipanggang dengan kepala dingin dan tangan yang sayang.
            </p>
            <div className="pill-row">
              <div className="pill"><Icon name="leaf" size={14}/> Bahan utuh & lokal</div>
              <div className="pill"><Icon name="flame" size={14}/> Fresh bake harian</div>
              <div className="pill"><Icon name="sparkle" size={14}/> By-order, no stok</div>
            </div>
            <div className="author-sig">
              — Dhimas R.
              <small>Founder & head baker</small>
            </div>
          </div>

          <div className="story-photos" aria-hidden="true">
            <div className="p1">
              <CakeImg src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=700&q=80&auto=format&fit=crop" alt=""/>
            </div>
            <div className="tape"></div>
            <div className="p2">
              <CakeImg src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&auto=format&fit=crop" alt=""/>
            </div>
            <div className="p3">
              <CakeImg src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80&auto=format&fit=crop" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
