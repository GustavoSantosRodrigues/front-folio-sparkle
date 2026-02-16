const GsLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* G */}
    <text
      x="0"
      y="30"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="700"
      fontSize="28"
      fill="currentColor"
    >
      GS
    </text>
    {/* .DEV */}
    <text
      x="52"
      y="30"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="700"
      fontSize="28"
      fill="hsl(142, 72%, 50%)"
    >
      .
    </text>
    <text
      x="62"
      y="30"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="400"
      fontSize="16"
      fill="hsl(142, 72%, 50%)"
      letterSpacing="2"
    >
      DEV
    </text>
  </svg>
);

export default GsLogo;
