import type { BLOCK_TYPES, BaseBlock } from '../../utils';
import type { LINK_RELS, LINK_TARGETS, LINK_VARIANTS } from './link.constants';

export interface LinkBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.LINK;
   label: string;
   url: string;
   target?: LinkTarget;
   rel?: LinkRel[];
   variant?: LinkVariant;
}

export type LinkVariant = (typeof LINK_VARIANTS)[keyof typeof LINK_VARIANTS];
export type LinkTarget = (typeof LINK_TARGETS)[keyof typeof LINK_TARGETS];
export type LinkRel = (typeof LINK_RELS)[keyof typeof LINK_RELS];
