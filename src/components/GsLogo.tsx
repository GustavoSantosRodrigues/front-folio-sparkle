const GsLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
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
  </svg>
);

export default GsLogo;
