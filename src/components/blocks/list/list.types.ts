import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';

export interface ListBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.LIST;
   ordered: boolean;
   items: string[];
}
