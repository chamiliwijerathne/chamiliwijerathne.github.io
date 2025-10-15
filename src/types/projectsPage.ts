import type { HeadingBlock } from "../components/blocks";
import type { MediaCardBlockType } from "../components/blocks/mediaCard";
import type { HeroSectionType } from "../components/sections";
import type { SectionTemplateType } from "../components/sections/sectionTemplate";

export type ProjectsBlock = HeadingBlock | MediaCardBlockType;

export interface ProjectsPageType {
   heroSection: HeroSectionType;
   projectsSection: SectionTemplateType<ProjectsBlock>;
}