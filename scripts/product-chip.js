function ProductChip({ label, className }) {
  const bgColor = className.includes("bg-") ? "" : "bg-green-700";
  return (
    <span className={`inline-block ${bgColor} text-white text-xs font-bold px-2 py-1 rounded-md ${className}`}>
      {label}
    </span>
  );
}
