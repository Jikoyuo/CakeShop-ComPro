import { useState } from 'react';
import { Icon } from './Icon';
import { CakeSVG, FLAVORS, FROSTINGS, SIZES, ADDONS } from './CakeSVG';
import { useReveal } from '../hooks/useReveal';
import { fmtIDR } from '../utils/format';

export function Customizer() {
  const [flavor, setFlavor]     = useState('vanilla');
  const [frosting, setFrosting] = useState('butter');
  const [size, setSize]         = useState('18');
  const [addons, setAddons]     = useState([]);
  const [msg, setMsg]           = useState('');
  const ref = useReveal();

  const flavorObj = FLAVORS.find(f => f.id === flavor);
  const sizeObj   = SIZES.find(s => s.id === size);
  const basePrice = 320000;
  const addonTotal = addons.reduce((s, a) => s + (ADDONS.find(x => x.id === a)?.price || 0), 0);
  const total = Math.round((basePrice + flavorObj.base) * sizeObj.mult + addonTotal);

  const toggleAddon = (id) => setAddons(a => a.includes(id) ? a.filter(x => x !== id) : [...a, id]);

  const waText = encodeURIComponent(
    `Halo Dhimas's Cake! Saya mau pesan custom cake:\n• Rasa: ${flavorObj.label}\n• Frosting: ${FROSTINGS.find(f => f.id === frosting).label}\n• Ukuran: ${sizeObj.label} (${sizeObj.sub})\n• Tambahan: ${addons.length ? addons.map(a => ADDONS.find(x => x.id === a).label).join(', ') : '—'}\n• Pesan: ${msg || '—'}\n• Estimasi: ${fmtIDR(total)}`
  );

  return (
    <section className="customize reveal" id="customize" ref={ref} data-screen-label="customize">
      <div className="container">
        <div className="cust-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Custom cake</div>
          <h2>Rakit kue <em>impianmu</em>,<br/>kami yang panggang.</h2>
          <p>Atur rasa, frosting, ukuran, dan dekorasi. Estimasi harga muncul real-time — lalu kirim brief lewat WhatsApp.</p>
        </div>

        <div className="cust-wrap">
          {/* Preview */}
          <div className="cust-preview">
            <div className="cust-cake">
              <CakeSVG flavor={flavor} frosting={frosting} addons={addons} size={size}/>
            </div>
            <div className="cust-summary">
              <div className="ttl" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)', fontWeight: 600 }}>
                Cake-mu sekarang
              </div>
              <div className="name">
                {flavorObj.label} · {sizeObj.label}
              </div>
              <div className="specs">
                {FROSTINGS.find(f => f.id === frosting).label}
                {addons.length > 0 && ' · +' + addons.length + ' tambahan'}
              </div>
              <div className="row">
                <div className="specs">{sizeObj.sub}</div>
                <div className="price">
                  <small>Estimasi</small>
                  {fmtIDR(total)}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="cust-controls">
            <div className="cust-section">
              <h4>Rasa <span>{flavorObj.label}</span></h4>
              <div className="swatch-row">
                {FLAVORS.map(f => (
                  <button key={f.id}
                    className={'swatch ' + (flavor === f.id ? 'is-on' : '')}
                    onClick={() => setFlavor(f.id)}>
                    <span className="dot" style={{ background: f.color }}/>
                    {f.label}
                    {f.base > 0 && <small style={{ opacity: .6, fontSize: 10 }}>+{fmtIDR(f.base)}</small>}
                  </button>
                ))}
              </div>
            </div>

            <div className="cust-section">
              <h4>Frosting <span>{FROSTINGS.find(f => f.id === frosting).label}</span></h4>
              <div className="swatch-row">
                {FROSTINGS.map(f => (
                  <button key={f.id}
                    className={'swatch ' + (frosting === f.id ? 'is-on' : '')}
                    onClick={() => setFrosting(f.id)}>
                    <span className="dot" style={{ background: f.color }}/>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="cust-section">
              <h4>Ukuran <span>{sizeObj.label} · {sizeObj.sub}</span></h4>
              <div className="size-row">
                {SIZES.map(s => (
                  <button key={s.id}
                    className={'size-btn ' + (size === s.id ? 'is-on' : '')}
                    onClick={() => setSize(s.id)}>
                    <span className="b">{s.label}</span>
                    <span className="s">{s.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="cust-section">
              <h4>Tambahan <span>{addons.length} dipilih</span></h4>
              <div className="add-row">
                {ADDONS.map(a => (
                  <button key={a.id}
                    className={'chip ' + (addons.includes(a.id) ? 'is-on' : '')}
                    onClick={() => toggleAddon(a.id)}>
                    <Icon name="plus" size={12}/>
                    {a.label}
                    <small style={{ opacity: .7 }}>+{fmtIDR(a.price)}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="cust-section">
              <h4>Catatan untuk baker <span>opsional</span></h4>
              <textarea
                className="cust-msg"
                placeholder="Misal: 'Tulisan Selamat Ulang Tahun Bu Ani', warna pastel mint, dll."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <div className="cust-submit">
              <div className="total">
                <small>Total estimasi</small>
                {fmtIDR(total)}
              </div>
              <a className="btn btn--primary"
                 href={`https://wa.me/6281200000000?text=${waText}`}
                 target="_blank" rel="noopener">
                <Icon name="wa" size={16}/> Kirim brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
