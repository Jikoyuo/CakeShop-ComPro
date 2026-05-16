export const Icon = ({ name, size = 18, stroke = 1.6, ...rest }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', ...rest };
  switch (name) {
    case 'arrow':    return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrowDR':  return <svg {...common}><path d="M7 7h10v10M7 17 17 7"/></svg>;
    case 'star':     return <svg {...common} fill="currentColor" stroke="none"><path d="M12 2.5 14.7 8l6 .9-4.35 4.2 1 6L12 16.3l-5.35 2.8 1-6L3.3 8.9l6-.9z"/></svg>;
    case 'plus':     return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus':    return <svg {...common}><path d="M5 12h14"/></svg>;
    case 'close':    return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>;
    case 'wa':       return <svg {...common}><path d="M21 11.5a8.5 8.5 0 0 1-12.83 7.34L3 21l2.16-5.17A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.5 9.5c0 4 2 6 6 6"/></svg>;
    case 'ig':       return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>;
    case 'pin':      return <svg {...common}><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'clock':    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'phone':    return <svg {...common}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
    case 'cake':     return <svg {...common}><path d="M4 21h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7zM4 17h16M9 12V8M12 12V7M15 12V8M9 8a1.5 1.5 0 0 1-1.5-1.5C7.5 5 9 4 9 4s1.5 1 1.5 2.5A1.5 1.5 0 0 1 9 8zm3 0a1.5 1.5 0 0 1-1.5-1.5C10.5 4 12 3 12 3s1.5 1 1.5 2.5A1.5 1.5 0 0 1 12 8zm3 0a1.5 1.5 0 0 1-1.5-1.5C13.5 5 15 4 15 4s1.5 1 1.5 2.5A1.5 1.5 0 0 1 15 8z"/></svg>;
    case 'sparkle':  return <svg {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>;
    case 'leaf':     return <svg {...common}><path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l8-8"/></svg>;
    case 'flame':    return <svg {...common}><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 1-3s-1 5 3 5"/></svg>;
    case 'menu':     return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case 'check':    return <svg {...common}><path d="m5 12 5 5 9-12"/></svg>;
    case 'send':     return <svg {...common}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
    default: return null;
  }
};
