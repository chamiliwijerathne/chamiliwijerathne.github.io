import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { ButtonVariant } from '../button';

export interface MediaCardBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.MEDIA_CARD;
   title: string;
   description?: string;
   imageSrc: string;
   imageAlt?: string;
   buttonLabel?: string;
   buttonHref?: string;
   buttonVariant?: ButtonVariant;
}
