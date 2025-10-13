import type { LinkVariant } from './link.types';

export const LINK_VARIANTS = {
   PRIMARY: 'primary',
   SECONDARY: 'secondary',
   SUCCESS: 'success',
   INFO: 'info',
   WARNING: 'warning',
   ERROR: 'error',
   DISABLED: 'disabled',
} as const;

export const linkTypeClassMap: Record<LinkVariant, string> = {
   primary: 'link-primary',
   secondary: 'link-secondary',
   success: '',
   info: '',
   warning: '',
   error: '',
   disabled: 'link-disabled',
};
