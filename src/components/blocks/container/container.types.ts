import type { CSSProperties } from 'react';
import type { BaseBlock, Block } from '../block.types';
import type { ALIGNS, LAYOUTS } from './container.constants';
import { SUB_CONTAINER_TYPES } from './container.constants';

export type LayoutType = (typeof LAYOUTS)[keyof typeof LAYOUTS];
export type AlignType = (typeof ALIGNS)[keyof typeof ALIGNS];
export type SubContainerType = (typeof SUB_CONTAINER_TYPES)[keyof typeof SUB_CONTAINER_TYPES];

export interface BaseContainer {
   id: string;
   layout?: LayoutType;
   align?: AlignType;
   gap?: string;
   classNames?: string[];
   style?: CSSProperties;
   subContainers?: SubContainer[];
}

export type SubContainer =
   | ({ subContainerType: SubContainerType } & Block)
   | ({ subContainerType: SubContainerType } & BaseContainer);
