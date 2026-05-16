import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { useReveal } from '../hooks/useReveal';
import { GALLERY } from '../data/content';

export function Gallery() {
  const ref = useReveal();
  return (
    <section className="gallery reveal" ref={ref} data-screen-label="gallery">
      <div className="container">
        <div className="gal-head">
          <div>
            <div className="eyebrow">Galeri</div>
            <h2>Di balik <em>oven</em>,<br/>di feed kami.</h2>
          </div>
          <a className="gal-handle" href="#" target="_blank" rel="noopener">
            <Icon name="ig" size={16}/> @dhimas.cake
            <Icon name="arrowDR" size={14}/>
          </a>
        </div>

        <div className="gal-grid">
          {GALLERY.map((src, i) => (
            <a key={i} href="#" className="gi" target="_blank" rel="noopener">
              <CakeImg src={src} alt={'Gallery ' + (i + 1)} />
              <div className="ig-mark"><Icon name="ig" size={28} stroke={1.4}/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
