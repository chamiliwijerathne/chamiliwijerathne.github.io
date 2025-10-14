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

export const LINK_TARGETS = {
   SELF: '_self',
   BLANK: '_blank',
   PARENT: '_parent',
   TOP: '_top',
} as const;

export const LINK_RELS = {
   NOOPENER: 'noopener',
   NOREFERRER: 'noreferrer',
   NOFOLLOW: 'nofollow',
} as const;