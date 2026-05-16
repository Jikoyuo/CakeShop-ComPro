import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { Squiggle } from './Decorations';
import { useMouseParallax } from '../hooks/useMouseParallax';

export function Hero() {
  const wrapRef = useMouseParallax(10);
  return (
    <section className="hero" id="top" ref={wrapRef}>
      <div className="float-deco" data-parallax="-1.2">cake.</div>

      <div className="container">
        <div className="hero-grid">
          {/* HEADLINE */}
          <div className="hero-headline">
            <div className="deco" data-parallax="2">
              <Squiggle w={140} h={18} stroke={2}/>
            </div>
            <h1>
              <span className="l1">Kue rumahan</span><br/>
              <span className="l2">yang bikin <em>kangen</em></span><br/>
              <span className="l3"><span className="acc">— dipanggang hari ini.</span></span>
            </h1>
          </div>

          {/* PHOTO */}
          <div className="hc hc-photo">
            <CakeImg src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1100&q=80&auto=format&fit=crop" alt="Hero cake"/>
            <div className="badge"><Icon name="flame" size={12}/> Fresh bake — hari ini</div>
          </div>

          {/* INTRO */}
          <div className="hc hc-intro">
            <div>
              <div className="eyebrow">Selamat datang</div>
              <p>
                Kami memanggang dengan bahan utuh, butter Eropa,
                dan waktu yang cukup. Tiap kue dibuat by order — supaya rasanya
                sampai ke meja Anda persis seperti baru keluar oven.
              </p>
            </div>
            <div className="actions">
              <a className="btn btn--primary" href="#menu" data-mag>Lihat menu <Icon name="arrow" className="arr" size={16}/></a>
              <a className="btn btn--ghost" href="#customize">Custom cake</a>
            </div>
          </div>

          {/* STATS */}
          <div className="hc-stats">
            <div className="hc-stat">
              <div className="n"><em>8</em>th</div>
              <div className="lab">Tahun memanggang</div>
            </div>
            <div className="hc-stat">
              <div className="n">12k+</div>
              <div className="lab">Kue terkirim</div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>fresh bake daily</span>
            <span>by-order</span>
            <span>butter eropa</span>
            <span>sourdough alami</span>
            <span>custom cake</span>
            <span>antar bandung</span>
            <span>fresh bake daily</span>
            <span>by-order</span>
            <span>butter eropa</span>
            <span>sourdough alami</span>
            <span>custom cake</span>
            <span>antar bandung</span>
          </div>
        </div>
      </div>
    </section>
  );
}
