interface FormTextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  error?: string;
}

export function FormTextarea({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  error,
}: FormTextareaProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-white text-sm font-medium mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={3}
        className={`bg-transparent border rounded-lg px-3 py-2 sm:px-4 sm:py-2 text-white text-sm placeholder:text-white/60 placeholder:text-left focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[80px] sm:min-h-[80px] resize-none text-left w-full ${
          error ? "border-red-400" : "border-white/60"
        }`}
      />
      {error && (
        <span className="text-red-400 text-xs mt-1 text-left block">
          {error}
        </span>
      )}
    </div>
  );
}
