import type { CSSProperties } from "react";
import type { BaseContainer } from "../../blocks";
import type { BaseSection } from "../section.types";

export interface SectionTemplateType<T> extends Omit<BaseSection<T>, 'type'> {
   id: string;
   classNames?: string[];
   style?: CSSProperties;
   containers?: BaseContainer[]
}