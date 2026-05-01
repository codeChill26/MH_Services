export default function Logo({ compact = false }) {
  return (
    <a className={`logo ${compact ? 'logo-compact' : ''}`} href="#home" aria-label="Max Huynh Web & Growth">
      <img className="logo-image" src="/logo-ma.svg" alt="Max Huynh Web & Growth" />
      {!compact && (
        <span className="logo-text">
          <strong>MAX HUYNH</strong>
          <small>WEB & GROWTH</small>
        </span>
      )}
    </a>
  );
}
