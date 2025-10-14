import type { HeadingBlock } from "../components/blocks";
import type { MediaCardBlockType } from "../components/blocks/mediaCard";
import type { HeroSectionType } from "../components/sections";
import type { SectionTemplateType } from "../components/sections/sectionTemplate";

export type FeaturedBlock = HeadingBlock | MediaCardBlockType;

export interface HomePageType {
   heroSection: HeroSectionType;
   featuredSection: SectionTemplateType<FeaturedBlock>;
}