import type { CSSProperties } from 'react';
import type { BLOCK_TYPES, TEXT_ALIGNMENTS } from './block.constants';
import type { ButtonBlock } from './button';
import type { HeadingBlock } from './heading';
import type { ParagraphBlock } from './paragraph';
import type { MediaCardBlockType } from './mediaCard';

export type TextAlignment = (typeof TEXT_ALIGNMENTS)[keyof typeof TEXT_ALIGNMENTS];

export interface BaseBlock {
   id: string;
   type: BlockType;
   align?: TextAlignment;
   classNames?: string[];
   style?: CSSProperties;
}

export type BlockType = (typeof BLOCK_TYPES)[keyof typeof BLOCK_TYPES];

export type Block = ButtonBlock | HeadingBlock | ParagraphBlock | MediaCardBlockType;