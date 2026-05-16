import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/globals.css';
import './styles/interactions.css';
import './styles/nav-hero.css';
import './styles/story-menu.css';
import './styles/customizer-bestseller.css';
import './styles/process-extra.css';
import './styles/testimoni-gallery.css';
import './styles/faq-contact-footer.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
