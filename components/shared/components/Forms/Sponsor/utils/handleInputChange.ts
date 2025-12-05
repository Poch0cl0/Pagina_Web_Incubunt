export function handleFormInputChange(
  field: string,
  value: string,
  formData: any,
  setFormData: React.Dispatch<React.SetStateAction<any>>,
  errors: any,
  setErrors: React.Dispatch<React.SetStateAction<any>>
) {
  if (field === "celular") {
    const numbersOnly = value.replace(/\D/g, "");
    const limitedNumbers = numbersOnly.slice(0, 9);
    setFormData({ ...formData, [field]: limitedNumbers });
  } else {
    setFormData({ ...formData, [field]: value });
  }

  if (errors[field]) {
    setErrors({ ...errors, [field]: undefined });
  }
}
