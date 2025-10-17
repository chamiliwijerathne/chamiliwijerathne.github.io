import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import type { LIST_MARKERS, LIST_TYPES } from './list.constants';

export type ListType = (typeof LIST_TYPES)[keyof typeof LIST_TYPES];
export type ListMarker = (typeof LIST_MARKERS)[keyof typeof LIST_MARKERS];

export interface ListBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.LIST;
   listType: ListType;
   markerStyle?: ListMarker;
   items: string[]; // TODO: Enhance to support styles and nested lists
}
