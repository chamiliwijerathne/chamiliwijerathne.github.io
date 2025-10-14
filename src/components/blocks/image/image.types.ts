import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { IMAGE_LOADING, IMAGE_SHAPES } from './image.constants';

export type ImageShape = (typeof IMAGE_SHAPES)[keyof typeof IMAGE_SHAPES];
export type ImageLoading = (typeof IMAGE_LOADING)[keyof typeof IMAGE_LOADING];

export interface ImageBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.IMAGE;
   src: string | ImageMetadata;
   alt?: string;
   caption?: string;
   shape?: ImageShape;
   width?: number;
   height?: number;
   loading?: ImageLoading;
}
