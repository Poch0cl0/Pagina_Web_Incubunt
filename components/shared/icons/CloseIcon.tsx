interface CloseIconProps {
  className?: string;
}

export function CloseIcon({ className = "" }: CloseIconProps) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.73317 22.9584L6.0415 21.2667L12.8082 14.5001L6.0415 7.73341L7.73317 6.04175L14.4998 12.8084L21.2665 6.04175L22.9582 7.73341L16.1915 14.5001L22.9582 21.2667L21.2665 22.9584L14.4998 16.1917L7.73317 22.9584Z"
        fill="white"
      />
    </svg>
  );
}
