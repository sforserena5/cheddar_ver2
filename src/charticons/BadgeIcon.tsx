export function BadgeIcon() {
  return (
    <svg viewBox="0 0 80 80" className="icon">
      {/* 리본 */}
      <polygon points="30,10 40,30 50,10" fill="#f4b83f" />
      
      {/* 메달 */}
      <circle cx="40" cy="50" r="18" fill="#ffd76a" />

      {/* 내부 원 */}
      <circle cx="40" cy="50" r="10" fill="#fff3c4" />
    </svg>
  );
}