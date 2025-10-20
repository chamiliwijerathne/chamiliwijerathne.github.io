import type { CSSProperties } from 'react';
import type { SECTION_TYPES } from './section.constants';
import type { ElementItem } from '../utils';

export interface BaseSection {
   id: string;
   type: SectionType;
   backgroundImage?: {
      url: string;
      classNames?: string[];
      style?: CSSProperties;
   };
   classNames?: string[];
   style?: CSSProperties;
   elements?: ElementItem[];
}

export type SectionType = (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES];