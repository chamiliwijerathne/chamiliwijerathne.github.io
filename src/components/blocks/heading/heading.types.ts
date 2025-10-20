import type { BLOCK_TYPES, BaseBlock } from '../../utils';
import type { HEADING_LEVELS } from './heading.constants';

export type HeadingLevel = (typeof HEADING_LEVELS)[keyof typeof HEADING_LEVELS];

export interface HeadingBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.HEADING;
   level: HeadingLevel;
   text: string;
}
