import type { CSSProperties } from 'react';
import type { ALIGNS, LAYOUTS } from './container.constants';
import { ELEMENT_TYPES } from './container.constants';
import type { Block } from '../blockRenderer';

export type LayoutType = (typeof LAYOUTS)[keyof typeof LAYOUTS];
export type AlignType = (typeof ALIGNS)[keyof typeof ALIGNS];
export type ElementType = (typeof ELEMENT_TYPES)[keyof typeof ELEMENT_TYPES];

export interface BaseElement {
   id: string;
   elementType: ElementType;
   layout?: LayoutType;
   align?: AlignType;
   gap?: string;
   classNames?: string[];
   style?: CSSProperties;
   elements?: ElementItem[];
}

export type ElementItem = BaseElement | ({ elementType: ElementType } & Block);
