import type { BaseSection } from "../section.types";
import type { SECTION_TYPES } from "../section.constants";
import type { ImageBlock } from "../../blocks/image";

export interface HeroSectionType extends BaseSection {
  type: typeof SECTION_TYPES.HERO;
  img?: Omit<ImageBlock, 'type'>;
}
