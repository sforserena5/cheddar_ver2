interface DiaryIconProps {
  className?: string;
  active?: boolean;
}

export function DiaryIcon({ className = "", active = false }: DiaryIconProps) {
  const fillColor = active ? "#de9b15" : "#9CA3AF";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 노트 본체 */}
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="2"
        fill={fillColor}
        fillOpacity={active ? "0.2" : "0"}
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 펜 */}
      <path
        d="M15 3 L15 8 L18 6 L15 3Z"
        fill={fillColor}
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 노트 선들 */}
      <line x1="9" y1="10" x2="15" y2="10" stroke={fillColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="14" x2="13" y2="14" stroke={fillColor} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
