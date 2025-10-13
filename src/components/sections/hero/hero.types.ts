import type { CSSProperties } from "react";
import type { HeadingBlock, ParagraphBlock, ButtonBlock } from "../../blocks";
import type { BaseSection } from "../section.types";
import type { SECTION_TYPES } from "../section.constants";

export type HeroBlock = HeadingBlock | ParagraphBlock | ButtonBlock;

export interface HeroSectionType extends BaseSection<HeroBlock> {
  type: typeof SECTION_TYPES.HERO;
  img?: {
    src: string;
    alt: string;
    classNames?: string[];
    style?: CSSProperties;
  };
}
