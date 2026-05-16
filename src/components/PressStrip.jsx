export function PressStrip() {
  return (
    <div className="press" data-screen-label="press">
      <div className="container">
        <div className="press-wrap">
          <div className="press-label">Pernah ditulis di</div>
          <div className="press-logos">
            <span style={{ fontStyle: 'italic' }}>The Manual</span>
            <span style={{ fontWeight: 700, letterSpacing: '-.02em' }}>FoodieID</span>
            <span style={{ fontFamily: 'var(--script)', fontSize: 26 }}>tastebud.</span>
            <span style={{ fontWeight: 600 }}>BANDUNG <small>guide</small></span>
            <span style={{ fontStyle: 'italic' }}>Whisk Mag</span>
          </div>
        </div>
      </div>
    </div>
  );
}
