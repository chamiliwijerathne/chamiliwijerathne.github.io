import type { CSSProperties } from 'react';
import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { IMAGE_LOADING, IMAGE_SHAPES } from './image.constants';

export type ImageShape = (typeof IMAGE_SHAPES)[keyof typeof IMAGE_SHAPES];
export type ImageLoading = (typeof IMAGE_LOADING)[keyof typeof IMAGE_LOADING];

export interface FigureProps {
   classNames?: string[] | string;
   style?: CSSProperties;
}

export interface CaptionProps {
   text?: string;
   classNames?: string[] | string;
   style?: CSSProperties;
}

export interface ImageBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.IMAGE;
   src: string | ImageMetadata;
   alt?: string;
   shape?: ImageShape;
   width?: number;
   height?: number;
   loading?: ImageLoading;
   figure?: FigureProps;
   caption?: CaptionProps;
}

export interface ImageBlockProps extends Omit<ImageBlock, 'src'> {
   src: string;
}