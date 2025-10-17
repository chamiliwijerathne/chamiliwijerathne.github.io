import type { HeadingBlock, ParagraphBlock } from "../components/blocks";
import type { HeroSectionType, SectionTemplateType } from "../components/sections";

type OverviewBlock = HeadingBlock | ParagraphBlock;
type CaseBlock = HeadingBlock | ParagraphBlock;
type ResponsibilitiesBlock = HeadingBlock | ParagraphBlock;

export interface LoginFlowPageType {
   heroSection: HeroSectionType;
   overviewSection: SectionTemplateType<OverviewBlock>;
   caseSection: SectionTemplateType<CaseBlock>;
   responsibilitiesSection: SectionTemplateType<ResponsibilitiesBlock>;
}