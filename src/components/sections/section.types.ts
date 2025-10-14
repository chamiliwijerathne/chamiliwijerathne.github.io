import type { CSSProperties } from 'react';
import type { BaseBlock, BaseContainer } from '../blocks';
import type { SECTION_TYPES } from './section.constants';

export interface BaseSection<Block = BaseBlock> {
   id: string;
   type: SectionType;
   backgroundImage?: string;
   classNames?: string[];
   style?: CSSProperties;
   containers?: BaseContainer[];
}

export type SectionType = (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES];