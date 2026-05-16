import { Icon } from './Icon';

export const Squiggle = ({ w = 120, h = 14, color = 'currentColor', stroke = 1.6 }) => (
  <svg width={w} height={h} viewBox="0 0 120 14" fill="none">
    <path d="M2 7c8-8 18 8 28 0s20 8 30 0 20 8 28 0 20 8 30 0" stroke={color} strokeWidth={stroke} strokeLinecap="round"/>
  </svg>
);

export const Star4 = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/>
  </svg>
);

export function Stars({ n = 5, size = 14 }) {
  return (
    <div className="stars">
      {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size}/>)}
    </div>
  );
}
