import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { LinkBlock } from '../link';
import type { BUTTON_VARIANTS } from './button.constants';

export interface ButtonBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.BUTTON;
   label: string;
   href?: Omit<LinkBlock, 'type'>;
   variant?: ButtonVariant;
}

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
