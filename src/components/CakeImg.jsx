import { useMemo, useState } from 'react';
import { Icon } from './Icon';

export function CakeImg({ src, alt, className, style, sizes }) {
  const [ok, setOk] = useState(true);
  const srcset = useMemo(() => {
    if (!src || !src.includes('images.unsplash.com')) return undefined;
    const base = src.split('?')[0];
    return [400, 700, 1000, 1400, 1800]
      .map(w => `${base}?w=${w}&q=80&auto=format&fit=crop ${w}w`)
      .join(', ');
  }, [src]);
  return ok ? (
    <img
      src={src}
      srcSet={srcset}
      sizes={sizes || '(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 700px'}
      alt={alt || ''}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => setOk(false)}
    />
  ) : (
    <div className={(className || '') + ' img-fallback'} style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <Icon name="cake" size={48} stroke={1.2} />
    </div>
  );
}
