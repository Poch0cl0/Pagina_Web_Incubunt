import { CheckIcon } from "../../../icons/CheckIcon";

interface RadioButtonProps {
  label: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export function RadioButton({
  label,
  value,
  selectedValue,
  onChange,
}: RadioButtonProps) {
  const isSelected = selectedValue === value;

  // Colors change based on selection state
  const borderColor = isSelected ? "border-[#FFB025]" : "border-white/30";
  const labelColor = isSelected ? "text-[#FFB025]" : "text-white/60";
  const checkColor = "#FFB025";

  const handleClick = () => {
    onChange(value);
  };

  return (
    <div
      className={`flex items-center gap-3 px-6 py-1 rounded-full border cursor-pointer transition-colors duration-200 ${borderColor} ${labelColor} select-none hover:border-[#FFB025] hover:text-[#FFB025]`}
      onClick={handleClick}
    >
      <div className="relative flex-shrink-0">
        <div
          className={`w-[23px] h-[23px] rounded-full border transition-colors duration-200 ${borderColor} flex items-center justify-center`}
        >
          {isSelected && (
            <CheckIcon fill={checkColor} className="w-[18px] h-[18px]" />
          )}
        </div>
      </div>

      <span className="text-sm leading-8 whitespace-nowrap">{label}</span>
    </div>
  );
}
