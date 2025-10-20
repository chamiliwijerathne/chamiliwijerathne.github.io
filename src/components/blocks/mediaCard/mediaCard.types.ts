import type { BLOCK_TYPES, BaseBlock, BaseElement } from '../../utils';
import type { ImageBlock } from '..';

export interface MediaCardBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.MEDIA_CARD;
   image: ImageBlock & { position: 'left' | 'right', wrapperClassNames?: string[]; src?: string; };
   containers?: BaseElement[];
}
