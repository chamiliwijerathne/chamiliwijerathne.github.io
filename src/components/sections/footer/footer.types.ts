import type { CSSProperties } from "react";
import type { NavItem } from "../header";
import type { ImageBlock } from "../../blocks";

export interface FooterType {
   id: string;
   img?: Omit<ImageBlock, 'type'>;
   items?: NavItem[];
   copyRight?: string;
   classNames?: string[];
   style?: CSSProperties;
}