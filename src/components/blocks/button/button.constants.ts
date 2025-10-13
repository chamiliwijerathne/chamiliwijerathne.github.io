import type { ButtonVariant } from './button.types';

export const BUTTON_VARIANTS = {
   PRIMARY: 'primary',
   SECONDARY: 'secondary',
   SUCCESS: 'success',
   INFO: 'info',
   WARNING: 'warning',
   ERROR: 'error',
} as const;

export const buttonTypeClassMap: Record<ButtonVariant, string> = {
   primary: 'btn-primary',
   secondary: 'btn-secondary',
   success: '',
   info: '',
   warning: '',
   error: '',
};
