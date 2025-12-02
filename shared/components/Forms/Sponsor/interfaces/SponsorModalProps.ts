export interface SponsorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormErrors {
  empresa?: string;
  nombres?: string;
  apellidos?: string;
  email?: string;
  celular?: string;
  mensaje?: string;
}