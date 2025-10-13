import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { IMAGE_SHAPES } from './image.constants';

export type ImageShape = (typeof IMAGE_SHAPES)[keyof typeof IMAGE_SHAPES];

export interface ImageBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.IMAGE;
   src: string;
   alt?: string;
   caption?: string;
   shape?: ImageShape;
}
