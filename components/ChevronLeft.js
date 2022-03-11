export default function ChevronLeft({ className }) {
  return (
    <div className={`w-10 h-10 flex items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="64"
        height="64"
        role="img"
      >
        <path
          fill="#1e3a8a"
          d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm62.63 304L296 374.63 177.37 256 296 137.37 318.63 160l-96 96z"
        />
      </svg>
    </div>
  )
}
