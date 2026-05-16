export const FLAVORS = [
  { id: 'vanilla',   label: 'Vanilla bean',  color: '#f4e7c8', cream: '#fff8eb', base: 0 },
  { id: 'choc',      label: 'Dark chocolate',color: '#5a3520', cream: '#6b4226', base: 25000 },
  { id: 'earlgrey',  label: 'Earl grey',     color: '#cfc2a8', cream: '#e8dcc0', base: 35000 },
  { id: 'redvelvet', label: 'Red velvet',    color: '#a23a44', cream: '#c75864', base: 35000 },
  { id: 'pistachio', label: 'Pistachio',     color: '#aebb73', cream: '#c8d28f', base: 55000 },
  { id: 'matcha',    label: 'Matcha',        color: '#7d8a5a', cream: '#a8b27b', base: 45000 },
];

export const FROSTINGS = [
  { id: 'butter',    label: 'Buttercream',  color: '#fff8eb' },
  { id: 'cream',     label: 'Cream cheese', color: '#fdeed3' },
  { id: 'ganache',   label: 'Dark ganache', color: '#3a2418' },
  { id: 'whipped',   label: 'Fresh whipped',color: '#ffffff' },
];

export const SIZES = [
  { id: '14', label: '14cm', sub: '4-6 pax',    mult: 0.75 },
  { id: '18', label: '18cm', sub: '8-10 pax',   mult: 1.00 },
  { id: '22', label: '22cm', sub: '14-18 pax',  mult: 1.45 },
  { id: '26', label: '26cm', sub: '22-30 pax',  mult: 2.00 },
];

export const ADDONS = [
  { id: 'florals', label: 'Edible florals',   price: 65000 },
  { id: 'gold',    label: 'Gold leaf',        price: 85000 },
  { id: 'topper',  label: 'Custom topper',    price: 45000 },
  { id: 'macaron', label: 'Macaron crown',    price: 70000 },
  { id: 'fruit',   label: 'Seasonal fruit',   price: 35000 },
];

export function CakeSVG({ flavor, frosting, addons, size }) {
  const fl = FLAVORS.find(f => f.id === flavor) || FLAVORS[0];
  const fr = FROSTINGS.find(f => f.id === frosting) || FROSTINGS[0];
  const scale = 0.7 + (SIZES.findIndex(s => s.id === size) * 0.13);

  return (
    <svg viewBox="0 0 360 360" width="320" height="320" style={{ transform: `scale(${scale})`, transition: 'transform .5s cubic-bezier(.2,.8,.2,1)' }}>
      {/* plate */}
      <ellipse cx="180" cy="290" rx="135" ry="14" fill="#000" opacity=".08"/>
      <ellipse cx="180" cy="284" rx="140" ry="20" fill="#e6d5b8"/>
      <ellipse cx="180" cy="280" rx="140" ry="20" fill="#fff8eb"/>

      {/* cake bottom layer */}
      <rect x="60" y="180" width="240" height="90" rx="8" fill={fr.color}/>
      <rect x="60" y="180" width="240" height="14" fill={fl.color}/>
      {/* drips */}
      <path d="M70 194 Q80 220 86 200 Q92 232 102 200 Q112 224 122 200 Q132 226 142 200 Q152 222 162 200 Q172 226 182 200 Q192 224 202 200 Q212 226 222 200 Q232 224 242 200 Q252 226 262 200 Q272 222 282 200 Q290 218 290 194 Z"
            fill={fr.color}/>

      {/* middle filling */}
      <rect x="80" y="170" width="200" height="80" rx="4" fill={fl.color} opacity=".25"/>

      {/* top layer */}
      <rect x="100" y="100" width="160" height="84" rx="6" fill={fr.color}/>
      <ellipse cx="180" cy="100" rx="80" ry="12" fill={fr.color}/>
      <ellipse cx="180" cy="100" rx="80" ry="12" fill="#fff" opacity=".25"/>

      {/* Decorative pattern based on frosting */}
      {fr.id === 'ganache' && (
        <>
          <path d="M100 110 Q110 130 120 110 Q130 130 140 110 Q150 130 160 110 Q170 130 180 110 Q190 130 200 110 Q210 130 220 110 Q230 130 240 110 Q250 130 260 110" fill={fr.color}/>
        </>
      )}

      {/* Addon: florals */}
      {addons.includes('florals') && (
        <>
          <g transform="translate(120,86)">
            {[0, 1, 2, 3, 4].map(i => (
              <circle key={i} cx={Math.cos(i * 72 * Math.PI / 180) * 8} cy={Math.sin(i * 72 * Math.PI / 180) * 8} r="6" fill="#f4c8c0"/>
            ))}
            <circle r="5" fill="#e8a890"/>
          </g>
          <g transform="translate(220,90)">
            {[0, 1, 2, 3, 4].map(i => (
              <circle key={i} cx={Math.cos(i * 72 * Math.PI / 180) * 6} cy={Math.sin(i * 72 * Math.PI / 180) * 6} r="5" fill="#d4cfe0"/>
            ))}
            <circle r="4" fill="#a89cc0"/>
          </g>
          <g transform="translate(170,80)">
            {[0, 1, 2, 3, 4].map(i => (
              <circle key={i} cx={Math.cos(i * 72 * Math.PI / 180) * 7} cy={Math.sin(i * 72 * Math.PI / 180) * 7} r="6" fill="#fbe7a8"/>
            ))}
            <circle r="4" fill="#d9b66a"/>
          </g>
        </>
      )}

      {/* Addon: gold */}
      {addons.includes('gold') && (
        <>
          <polygon points="140,98 144,92 148,98 144,104" fill="#d4af37"/>
          <polygon points="200,96 206,90 210,98 204,104" fill="#d4af37"/>
          <polygon points="170,178 174,172 178,178 174,184" fill="#d4af37"/>
        </>
      )}

      {/* Addon: topper */}
      {addons.includes('topper') && (
        <g transform="translate(180,50)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#5a3a26" strokeWidth="2"/>
          <path d="M-22 -10 L22 -10 L26 0 L20 6 L-20 6 L-26 0 Z" fill="#d97757"/>
          <text x="0" y="2" textAnchor="middle" fontFamily="cursive" fontSize="11" fill="#fff">Happy</text>
        </g>
      )}

      {/* Addon: macaron crown */}
      {addons.includes('macaron') && (
        <>
          {[0, 1, 2, 3, 4].map(i => {
            const colors = ['#f4d4bf', '#e8c4a0', '#d4a890', '#fbe7a8', '#c8a890'];
            return (
              <g key={i} transform={`translate(${110 + i * 36},78)`}>
                <ellipse cx="0" cy="0" rx="10" ry="5" fill={colors[i]}/>
                <ellipse cx="0" cy="3" rx="10" ry="3" fill="#fff" opacity=".5"/>
                <ellipse cx="0" cy="6" rx="10" ry="5" fill={colors[i]}/>
              </g>
            );
          })}
        </>
      )}

      {/* Addon: seasonal fruit */}
      {addons.includes('fruit') && (
        <>
          <circle cx="140" cy="90" r="8" fill="#c83a44"/>
          <circle cx="155" cy="92" r="6" fill="#7a2a30"/>
          <circle cx="210" cy="88" r="7" fill="#c83a44"/>
          <circle cx="195" cy="92" r="6" fill="#7a2a30"/>
          <circle cx="175" cy="86" r="5" fill="#e8a890"/>
        </>
      )}
    </svg>
  );
}
