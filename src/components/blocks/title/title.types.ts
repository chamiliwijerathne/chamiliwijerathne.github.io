import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';

export interface TitleBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.TITLE;
   text: string;
}
