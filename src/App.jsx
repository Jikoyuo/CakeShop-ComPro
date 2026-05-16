import { useEffect, useState } from 'react';

import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Menu } from './components/Menu';
import { ProductModal } from './components/ProductModal';
import { BestSeller } from './components/BestSeller';
import { Customizer } from './components/Customizer';
import { PressStrip } from './components/PressStrip';
import { Proses } from './components/Proses';
import { Newsletter } from './components/Newsletter';
import { Testimoni } from './components/Testimoni';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorBlob } from './components/CursorBlob';
import { TodaysBake } from './components/TodaysBake';

import { useMagnetic } from './hooks/useMagnetic';
import { useTweaks } from './components/tweaks/useTweaks';
import {
  TweaksPanel, TweakSection, TweakColor, TweakRadio,
} from './components/tweaks/TweaksPanel';

const TWEAK_DEFAULTS = (() => {
  try {
    const node = document.getElementById('tweak-defaults');
    if (node) return JSON.parse(node.textContent);
  } catch (e) {}
  return { primaryColor: '#d97757', bentoLayout: 'editorial' };
})();

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [product, setProduct] = useState(null);

  useMagnetic();

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', tweaks.primaryColor);
  }, [tweaks.primaryColor]);

  const openProduct = (p) => setProduct(p);
  const closeProduct = () => setProduct(null);

  return (
    <>
      <ScrollProgress />
      <CursorBlob />
      <Nav />

      <main>
        <Hero />
        <Story />
        <Menu layout={tweaks.bentoLayout} onOpen={openProduct} />
        <BestSeller onOpen={openProduct} />
        <Customizer />
        <PressStrip />
        <Proses />
        <Newsletter />
        <Testimoni />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <TodaysBake onOpen={openProduct} />
      <ProductModal product={product} onClose={closeProduct} />

      <TweaksPanel>
        <TweakSection label="Theme">
          <TweakColor
            label="Primary"
            value={tweaks.primaryColor}
            options={['#d97757', '#b85d3e', '#7d8a5a', '#a23a44', '#2a1810']}
            onChange={(v) => setTweak('primaryColor', v)}
          />
        </TweakSection>
        <TweakSection label="Menu">
          <TweakRadio
            label="Bento layout"
            value={tweaks.bentoLayout}
            options={['editorial', 'grid', 'mosaic']}
            onChange={(v) => setTweak('bentoLayout', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
