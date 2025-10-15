import type { HeadingBlock, ParagraphBlock, ButtonBlock } from "../../blocks";
import type { BaseSection } from "../section.types";
import type { SECTION_TYPES } from "../section.constants";
import type { ImageBlock } from "../../blocks/image";

export type HeroBlock = HeadingBlock | ParagraphBlock | ButtonBlock;

export interface HeroSectionType extends BaseSection<HeroBlock> {
  type: typeof SECTION_TYPES.HERO;
  img?: Omit<ImageBlock, 'type'>;
}
