import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { BUTTON_VARIANTS } from './button.constants';

export interface ButtonBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.BUTTON;
   label: string;
   href?: {
      label: string;
      url: string;
      targetBlank?: boolean;
      rel?: string;
      variant?: string;
   };
   variant?: ButtonVariant;
}

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
