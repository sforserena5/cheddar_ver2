interface ChatIconProps {
  className?: string;
  active?: boolean;
}

export function ChatIcon({ className = "", active = false }: ChatIconProps) {
  const fillColor = active ? "#FFB800" : "#9CA3AF";

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 둥근 사각형 말풍선 */}
      <rect
        x="3"
        y="5"
        width="18"
        height="12"
        rx="6"
        fill={fillColor}
        fillOpacity={active ? "0.2" : "0"}
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 말풍선 꼬리 - 둥글게 */}
      <path
        d="M12 17 C 12 17, 13 19, 14 20"
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* 점 3개 */}
      <circle cx="8" cy="11" r="1.2" fill={fillColor} />
      <circle cx="12" cy="11" r="1.2" fill={fillColor} />
      <circle cx="16" cy="11" r="1.2" fill={fillColor} />
    </svg>
  );
}
