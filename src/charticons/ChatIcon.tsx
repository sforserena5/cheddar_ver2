export function ChatIcon() {
  return (
    <svg viewBox="0 0 80 80" className="icon">
      {/* 얼굴 */}
      <circle cx="40" cy="45" r="18" fill="#82ddc0" />

      {/* 눈 */}
      <circle cx="34" cy="42" r="2" fill="#333" />
      <circle cx="46" cy="42" r="2" fill="#333" />

      {/* 입 */}
      <path
        d="M34 50 Q40 55 46 50"
        stroke="#333"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* 헤드셋 */}
      <path
        d="M25 40 A15 15 0 0 1 55 40"
        stroke="#333"
        strokeWidth="3"
        fill="none"
      />

      <rect x="22" y="38" width="5" height="10" rx="2" fill="#333" />
      <rect x="53" y="38" width="5" height="10" rx="2" fill="#333" />
    </svg>
  );
}