import type { CSSProperties } from "react";
import type { NavItem } from "../header";

export interface FooterType {
   id: string;
   items?: NavItem[];
   copyRight?: string;
   classNames?: string[];
   style?: CSSProperties;
}