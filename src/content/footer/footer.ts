import { LINK_RELS, LINK_TARGETS } from '../../components/blocks';
import { NAV_ITEM_TYPES } from '../../components/sections';
import type { FooterType } from '../../components/sections/footer';
import { IMAGES } from '../constants/images';
import { EMAIL_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants/url';

export const footer: FooterType = {
   id: 'footer',
   classNames: ['footer'],
   items: [
      {
         label: 'Instagram',
         type: NAV_ITEM_TYPES.IMAGE,
         id: 'instagram',
         img: {
            id: 'instagram-icon',
            src: IMAGES.INSTAGRAM_ICON,
            alt: 'Instagram',
            width: 48,
            height: 48,
         },
         href: {
            id: 'instagram-link',
            url: INSTAGRAM_URL,
            label: 'Instagram',
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
            target: LINK_TARGETS.BLANK,
         },
      },
      {
         label: 'LinkedIn',
         type: NAV_ITEM_TYPES.IMAGE,
         id: 'linkedin',
         img: {
            id: 'linkedin-icon',
            src: IMAGES.LINKEDIN_ICON,
            alt: 'LinkedIn',
            width: 48,
            height: 48,
         },
         href: {
            id: 'linkedin-link',
            url: LINKEDIN_URL,
            label: 'LinkedIn',
            rel: [LINK_RELS.NOOPENER, LINK_RELS.NOREFERRER],
            target: LINK_TARGETS.BLANK,
         },
      },
      {
         id: 'gmail',
         type: NAV_ITEM_TYPES.IMAGE,
         img: {
            id: 'gmail-icon',
            src: IMAGES.GMAIL_ICON,
            alt: 'Gmail',
            width: 48,
            height: 48,
         },
         href: {
            id: 'gmail-link',
            url: `mailto: ${EMAIL_URL}`,
            label: 'Gmail',
         },
      },
   ],
   copyRight: '© 2025 Chamili Wijerathne. All rights reserved.',
};
