import type { BLOCK_TYPES, BaseBlock } from '../../utils';

export interface ParagraphBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.PARAGRAPH;
   text: string;
   bold?: boolean;
   italic?: boolean;
   underline?: boolean;
}
