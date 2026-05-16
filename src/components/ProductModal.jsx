import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { CakeImg } from './CakeImg';
import { fmtIDR } from '../utils/format';
import { useBodyLock } from '../hooks/useBodyLock';

export function ProductModal({ product, onClose }) {
  const [size, setSize] = useState(product?.sizes?.[0] || '');
  useBodyLock(!!product);
  useEffect(() => {
    if (product) setSize(product.sizes?.[0] || '');
  }, [product]);
  useEffect(() => {
    if (!product) return;
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [product, onClose]);
  if (!product) return null;

  const idx = product.sizes.indexOf(size);
  const price = Math.round(product.price * (1 + idx * 0.4));

  const waMsg = encodeURIComponent(
    `Halo Dhimas's Cake! Saya mau pesan:\n• ${product.name}\n• Ukuran: ${size}\n• Estimasi: ${fmtIDR(price)}\nMohon info ketersediaan & pengambilan.`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><Icon name="close" size={16}/></button>
        <div className="modal-img">
          <CakeImg src={product.img} alt={product.name}/>
        </div>
        <div className="modal-body">
          <div className="ttl">{product.tagline}</div>
          <h3>{product.name}</h3>
          <p className="modal-story">{product.story}</p>

          <div className="eyebrow" style={{ marginBottom: 10 }}>Pilih ukuran</div>
          <div className="size-pills">
            {product.sizes.map(s => (
              <label key={s} className={size === s ? 'is-on' : ''}>
                <input type="radio" name="size" checked={size === s} onChange={() => setSize(s)} />
                {s}
              </label>
            ))}
          </div>

          <div className="price-large">
            <small>Estimasi harga</small>
            {fmtIDR(price)}
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn--primary"
               href={`https://wa.me/6281200000000?text=${waMsg}`}
               target="_blank" rel="noopener">
              <Icon name="wa" size={16}/> Pesan via WhatsApp
            </a>
            <button className="btn btn--ghost" onClick={onClose}>Lihat lainnya</button>
          </div>
        </div>
      </div>
    </div>
  );
}
