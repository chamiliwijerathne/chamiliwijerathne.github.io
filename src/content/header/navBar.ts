import { LINK_RELS, LINK_TARGETS } from "../../components/blocks";
import { NAV_ITEM_TYPES, type NavBarType } from "../../components/sections";
import { IMAGES } from "../constants/images";

export const navBar: NavBarType = {
   id: "navBar",
   classNames: ["nav-bar"],
   leftItems: [
      {
         id: "logo",
         type: NAV_ITEM_TYPES.IMAGE,
         href: {
            id: "home-link",
            label: "Home",
            url: "/",
            target: LINK_TARGETS.SELF,
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
         },
         img: {
            id: "logo-image",
            classNames: ["w-[79px]"],
            src: IMAGES.LOGO,
            alt: "Logo",
         },
      }
   ],
   rightItems: [
      {
         id: "home",
         type: NAV_ITEM_TYPES.LINK,
         label: "Home",
         href: {
            id: "home-link",
            label: "Home",
            url: "/",
            target: LINK_TARGETS.SELF,
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
         },
      },
      {
         id: "projects",
         type: NAV_ITEM_TYPES.LINK,
         label: "Projects",
         href: {
            id: "projects-link",
            label: "Projects",
            url: "/projects",
            target: LINK_TARGETS.SELF,
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
         },
      },
      {
         id: "about",
         type: NAV_ITEM_TYPES.LINK,
         label: "About",
         href: {
            id: "about-link",
            label: "About",
            url: "/about",
            target: LINK_TARGETS.SELF,
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
         },
      },
      {
         id: "contact",
         type: NAV_ITEM_TYPES.LINK,
         label: "Contact",
         href: {
            id: "contact-link",
            label: "Contact",
            url: "/contact",
            target: LINK_TARGETS.SELF,
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
         },
      },
   ],
}