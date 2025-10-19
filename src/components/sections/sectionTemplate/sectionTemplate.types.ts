import type { CSSProperties } from "react";
import type { ElementItem } from "../../blocks";
import type { BaseSection } from "../section.types";

export interface SectionTemplateType extends Omit<BaseSection, 'type'> {
   id: string;
   classNames?: string[];
   style?: CSSProperties;
   elements?: ElementItem[]
}