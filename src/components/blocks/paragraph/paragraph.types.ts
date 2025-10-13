import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';

export interface ParagraphBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.PARAGRAPH;
   text: string;
   bold?: boolean;
   italic?: boolean;
   underline?: boolean;
}
