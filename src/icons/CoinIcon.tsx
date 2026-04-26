interface CoinIconProps {
  className?: string;
  active?: boolean;
}

export function CoinIcon({ className = "", active = false }: CoinIconProps) {
  const fillColor = active ? "#FFB800" : "#9CA3AF";

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 별 모양 포인트 */}
      <path
        d="M12 3L14.5 8.5L20.5 9.5L16 14L17.5 20L12 17L6.5 20L8 14L3.5 9.5L9.5 8.5L12 3Z"
        fill={fillColor}
        fillOpacity={active ? "0.3" : "0"}
        stroke={fillColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 가운데 P (Point) */}
      {active && (
        <text
          x="12"
          y="15"
          fontSize="10"
          fontWeight="bold"
          fill={fillColor}
          textAnchor="middle"
        >
          
        </text>
      )}
    </svg>
  );
}
