import type { BaseSection } from "../section.types";
import type { SECTION_TYPES } from "../section.constants";
import type { ImageBlock } from "../../blocks";

export interface HeroSectionType extends BaseSection {
  type: typeof SECTION_TYPES.HERO;
  elementsWrapperClassNames?: string[];
  img?: Omit<ImageBlock, 'type'> & {
    wrapperClassNames?: string[];
    srcTablet?: string | ImageMetadata;
    srcDesktop?: string | ImageMetadata;
  };
}
