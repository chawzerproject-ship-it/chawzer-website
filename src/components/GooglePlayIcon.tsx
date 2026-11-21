interface GooglePlayIconProps {
  className?: string;
}

export default function GooglePlayIcon({ className }: GooglePlayIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M3.3 2.4 13.7 12 3.3 21.6a1.7 1.7 0 0 1-.8-1.5V3.9a1.7 1.7 0 0 1 .8-1.5Z" fill="#4285F4" />
      <path d="m3.3 2.4 12.5 7.1L13.7 12 3.3 2.4Z" fill="#34A853" />
      <path d="m3.3 21.6 12.5-7.1L13.7 12 3.3 21.6Z" fill="#FBBC04" />
      <path d="m15.8 9.5 4.1 2.3a.3.3 0 0 1 0 .4l-4.1 2.3L13.7 12l2.1-2.5Z" fill="#EA4335" />
    </svg>
  );
}
