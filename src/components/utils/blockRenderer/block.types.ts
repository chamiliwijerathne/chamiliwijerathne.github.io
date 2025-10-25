import type { CSSProperties } from 'react';
import type { BLOCK_TYPES, TEXT_ALIGNMENTS } from './block.constants';
import type { ButtonBlock, HeadingBlock, ParagraphBlock, ListBlock, ImageBlockProps, MediaCardBlock, InputBlock, TextAreaBlock } from './../../blocks';

export type TextAlignment = (typeof TEXT_ALIGNMENTS)[keyof typeof TEXT_ALIGNMENTS];

export interface BaseBlock {
   id: string;
   type: BlockType;
   align?: TextAlignment;
   classNames?: string[];
   style?: CSSProperties;
}

export type BlockType = (typeof BLOCK_TYPES)[keyof typeof BLOCK_TYPES];

export type Block = ButtonBlock | HeadingBlock | ParagraphBlock | MediaCardBlock | ListBlock | ImageBlockProps | InputBlock | TextAreaBlock;