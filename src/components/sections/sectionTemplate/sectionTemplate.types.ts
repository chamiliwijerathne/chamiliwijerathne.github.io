import type { CSSProperties } from "react";
import type { BaseSection } from "../section.types";
import type { ElementItem } from "../../utils";

export interface SectionTemplateType extends Omit<BaseSection, 'type'> {
   id: string;
   classNames?: string[];
   style?: CSSProperties;
   elements?: ElementItem[]
}