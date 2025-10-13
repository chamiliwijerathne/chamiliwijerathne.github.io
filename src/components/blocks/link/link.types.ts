import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { LINK_VARIANTS } from './link.constants';

export interface LinkBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.LINK;
   label: string;
   url: string;
   targetBlank?: boolean;
   rel?: string;
   variant?: LinkVariant;
}

export type LinkVariant = (typeof LINK_VARIANTS)[keyof typeof LINK_VARIANTS];
