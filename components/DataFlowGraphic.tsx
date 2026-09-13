type DataFlowGraphicProps = {
  compact?: boolean;
};

export default function DataFlowGraphic({ compact = false }: DataFlowGraphicProps) {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-labelledby="data-flow-title data-flow-description"
      className={compact ? "data-flow-graphic data-flow-graphic-compact" : "data-flow-graphic"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="data-flow-title">Revenue cycle data flow</title>
      <desc id="data-flow-description">A claim moves through documentation, coding, verification, and payment tracking.</desc>
      <path d="M66 154C130 58 195 58 260 154C325 250 390 250 454 154" stroke="currentColor" strokeOpacity=".18" strokeWidth="3" strokeDasharray="8 9" />
      <path d="M66 154C130 58 195 58 260 154C325 250 390 250 454 154" stroke="url(#flow-line)" strokeWidth="3" strokeLinecap="round" strokeDasharray="30 180" />
      <g transform="translate(24 115)">
        <rect width="84" height="78" rx="18" fill="#fff" stroke="#D8E8F0" />
        <rect x="18" y="17" width="34" height="42" rx="5" fill="#E8F6F5" />
        <path d="M25 28h20M25 36h20M25 44h13" stroke="#168E91" strokeWidth="3" strokeLinecap="round" />
        <circle cx="63" cy="54" r="10" fill="#168E91" />
        <path d="m59 54 3 3 5-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(142 29)">
        <rect width="84" height="78" rx="18" fill="#fff" stroke="#D8E8F0" />
        <path d="M20 57V32M32 57V22M44 57V39M56 57V15" stroke="#F07D62" strokeWidth="8" strokeLinecap="round" />
        <path d="M17 62h45" stroke="#0F4C81" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(218 115)">
        <rect width="84" height="78" rx="18" fill="#0F4C81" />
        <circle cx="42" cy="39" r="21" fill="#31A9A9" />
        <path d="m31 40 8 8 15-18" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(294 193)">
        <rect width="84" height="78" rx="18" fill="#fff" stroke="#D8E8F0" />
        <path d="M18 54h48M24 54V38h12v16M42 54V28h12v26M60 54V19h6v35" stroke="#0F4C81" strokeWidth="4" strokeLinejoin="round" />
        <path d="M19 21h25" stroke="#F2B544" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(412 115)">
        <rect width="84" height="78" rx="18" fill="#fff" stroke="#D8E8F0" />
        <circle cx="42" cy="39" r="22" fill="#FFF4D8" />
        <path d="M42 25v15l10 7" stroke="#C4840B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <linearGradient id="flow-line" x1="60" y1="60" x2="460" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F07D62" />
          <stop offset=".48" stopColor="#31A9A9" />
          <stop offset="1" stopColor="#F2B544" />
        </linearGradient>
      </defs>
    </svg>
  );
}
