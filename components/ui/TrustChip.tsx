interface TrustChipProps {
  children: React.ReactNode
  className?: string
}

export default function TrustChip({ children, className = '' }: TrustChipProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1
        bg-white/80 backdrop-blur-sm
        rounded-full text-sm font-medium text-forest-900
        border border-sand-200
        ${className}
      `}
    >
      <svg
        className="w-4 h-4 mr-1.5 text-terra-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </span>
  )
}
