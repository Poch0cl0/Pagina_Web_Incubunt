interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
  error?: string;
  required?: boolean;
}

export function FormInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  error,
  required,
}: FormInputProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-white text-sm font-medium mb-3">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full
          px-4 py-3
          bg-transparent
          border border-white/30
          rounded-lg
          text-white
          placeholder:text-white/50
          placeholder:text-left
          text-left
          focus:border-[#FFB025]
          focus:outline-none
          focus:ring-0
          transition-colors
          ${error ? "border-red-400" : ""}
        `}
        required={required}
      />

      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  );
}
