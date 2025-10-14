import type { CSSProperties } from "react";
import { NAV_ITEM_TYPES } from "./nav.constants";
import type { ButtonVariant, LinkBlock } from "../../../blocks";
import type { ImageBlock } from "../../../blocks/image";

export type NavItemType = (typeof NAV_ITEM_TYPES)[keyof typeof NAV_ITEM_TYPES];

export interface BaseNavItem {
   id: string;
   type: NavItemType;
   label: string;
   classNames?: string[];
   style?: CSSProperties;
}

export interface NavItemImage extends Omit<BaseNavItem, 'label'> {
   type: typeof NAV_ITEM_TYPES.IMAGE;
   label?: string;
   img?: Omit<ImageBlock, 'type'>;
   href: Omit<LinkBlock, 'type'>;
}

export interface NavLink extends BaseNavItem {
   type: typeof NAV_ITEM_TYPES.LINK;
   href: Omit<LinkBlock, 'type'>;
   icon?: string;
}

export interface NavDropdown extends BaseNavItem {
   type: typeof NAV_ITEM_TYPES.DROPDOWN;
   items: NavLink[];
   icon?: string;
}

export interface NavButton extends BaseNavItem {
   type: typeof NAV_ITEM_TYPES.BUTTON;
   variant?: ButtonVariant;
   href?: Omit<LinkBlock, 'type'>;
   onClick?: () => void;
   icon?: string;
}

export type NavItem = NavItemImage | NavLink | NavDropdown | NavButton;

export interface NavBarType {
   id: string;
   leftItems?: NavItem[];
   rightItems?: NavItem[];
   classNames?: string[];
   style?: CSSProperties;
}