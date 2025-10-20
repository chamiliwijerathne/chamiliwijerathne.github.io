import { BUTTON_VARIANTS, LINK_TARGETS } from '../components/blocks';
import { BLOCK_TYPES, ELEMENT_TYPES } from '../components/utils';
import { SECTION_TYPES } from '../components/sections';
import type { HomePageType } from '../types';
import { IMAGES } from './constants/images';

export const homePage: HomePageType = {
   heroSection: {
      id: 'home-hero-section',
      type: SECTION_TYPES.HERO,
      classNames: ['home-hero-section'],
      elements: [
         {
            id: 'role-text',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.PARAGRAPH,
            text: 'UI/UX DESIGNER',
            classNames: ['home-hero-role'],
         },
         {
            id: 'intro-heading',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.HEADING,
            text: 'Hello, my name is',
            level: 2,
            classNames: ['leading-tight'],
         },
         {
            id: 'full-name-heading',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.HEADING,
            text: 'Chamili Wijerathne',
            level: 1,
            classNames: ['leading-tight', 'mb-8'],
         },
         {
            id: 'role-description',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.PARAGRAPH,
            text: 'A passionate UI/UX designer. I create clean, user-friendly digital experiences that bring ideas to life through thoughtful design and usability.',
            classNames: ['role-description'],
         },
         {
            id: 'cta-buttons-container',
            elementType: ELEMENT_TYPES.CONTAINER,
            classNames: ['cta-container'],
            elements: [
               {
                  id: 'projects-button',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.BUTTON,
                  variant: 'primary',
                  href: {
                     id: 'projects-link',
                     url: '/projects',
                     label: 'Projects',
                  },
                  classNames: ['cta-button', 'rounded-lg'],
               },
               {
                  id: 'linkedin-button',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.BUTTON,
                  variant: 'secondary',
                  href: {
                     id: 'linkedin-link',
                     url: '/projects',
                     label: 'LinkedIn',
                     target: LINK_TARGETS.BLANK,
                  },
                  classNames: ['cta-button', 'rounded-lg'],
               },
            ],
         },
      ],
      img: {
         id: 'home-hero-image',
         src: IMAGES.HERO_HOME_PAGE as ImageMetadata,
         alt: 'Hero',
         classNames: ['hero-img'],
         loading: 'eager',
      },
   },
   featuredSection: {
      id: 'home-featured-section',
      classNames: ['home-featured-section'],
      elements: [
         {
            id: 'featured-heading',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.HEADING,
            text: 'Featured',
            level: 2,
            classNames: ['featured-heading', 'mb-4'],
         },
         {
            id: 'beat-spot-media-card',
            classNames: [
               'grid grid-cols-1 md:grid-cols-2',
               'shadow-[0_6px_64px_0_rgba(112,144,176,0.1)]',
               'rounded-3xl',
               'overflow-hidden',
               'md:h-[524px]',
               'bg-neutral-900',
            ],
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.MEDIA_CARD,
            image: {
               id: 'beat-spot-media-card-image',
               type: BLOCK_TYPES.IMAGE,
               src: '/src/assets/images/beatSpotMediaCard.svg',
               alt: 'Beat Spot Media Card',
               position: 'right',
               classNames: ['w-full', 'h-full', 'object-cover'],
            },
            containers: [
               {
                  id: 'beat-spot-media-card-title',
                  classNames: ['flex', 'flex-col', 'items-center', 'justify-center', 'p-12', 'space-y-6'],
                  elementType: ELEMENT_TYPES.CONTAINER,
                  elements: [
                     {
                        id: 'beat-spot-title',
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.HEADING,
                        text: 'BeatSpot',
                        level: 3,
                     },
                     {
                        id: 'beat-spot-description',
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.PARAGRAPH,
                        text: 'BeatSpot is a mobile app that makes it easy for users to discover, explore, and book nearby hip hop concerts, battles, and festivals.',
                        classNames: ['text-neutral-400'],
                     },
                     {
                        id: 'beat-spot-cta-button',
                        classNames: ['rounded-full', 'w-fit'],
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.BUTTON,
                        variant: BUTTON_VARIANTS.SECONDARY,
                        href: {
                           id: 'beat-spot-link',
                           url: '/projects/beatspot',
                           label: 'View Project',
                        },
                     },
                  ],
               },
            ],
         },
         {
            id: 'sun-ray-media-card',
            classNames: [
               'grid grid-cols-1 md:grid-cols-2',
               'shadow-[0_6px_64px_0_rgba(112,144,176,0.1)]',
               'rounded-3xl',
               'overflow-hidden',
               'md:h-[524px]',
               'bg-neutral-900',
            ],
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.MEDIA_CARD,
            image: {
               id: 'sun-ray-media-card-image',
               type: BLOCK_TYPES.IMAGE,
               src: '/src/assets/images/sunRayMediaCard.svg',
               alt: 'Sun Ray Media Card',
               position: 'left', // TODO: Handle flex-row-reverse order-1 or 2 internally based on the image position
               classNames: ['w-full', 'h-full', 'object-cover'],
            },
            containers: [
               {
                  id: 'sun-ray-media-card-content-wrapper',
                  classNames: ['flex', 'flex-col', 'items-center', 'justify-center', 'p-12', 'space-y-6'],
                  elementType: ELEMENT_TYPES.CONTAINER,
                  elements: [
                     {
                        id: 'sun-ray-title',
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.HEADING,
                        text: 'SunRay',
                        level: 3,
                     },
                     {
                        id: 'sun-ray-description',
                        classNames: ['text-neutral-400'],
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.PARAGRAPH,
                        text: 'SunRay is a responsive e-commerce website for a sunglass store, designed with a clean UI and seamless shopping experience across desktop and mobile.',
                     },
                     {
                        id: 'sun-ray-cta-button',
                        classNames: ['rounded-full', 'w-fit'],
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.BUTTON,
                        variant: BUTTON_VARIANTS.SECONDARY,
                        href: {
                           id: 'sun-ray-link',
                           url: '/projects/sunray',
                           label: 'View Project',
                        },
                     },
                  ],
               },
            ],
         },
         {
            id: 'flixio-media-card',
            classNames: [
               'grid grid-cols-1 md:grid-cols-2',
               'shadow-[0_6px_64px_0_rgba(112,144,176,0.1)]',
               'rounded-3xl',
               'overflow-hidden',
               'md:h-[524px]',
               'bg-neutral-900',
            ],
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.MEDIA_CARD,
            image: {
               id: 'flixio-media-card-image',
               type: BLOCK_TYPES.IMAGE,
               src: '/src/assets/images/flixioMediaCard.svg',
               alt: 'Flixio Media Card',
               position: 'right',
               classNames: ['w-full', 'h-full', 'object-cover'],
            },
            containers: [
               {
                  id: 'flixio-media-card-title',
                  classNames: ['flex', 'flex-col', 'items-center', 'justify-center', 'p-12', 'space-y-6'],
                  elementType: ELEMENT_TYPES.CONTAINER,
                  elements: [
                     {
                        id: 'flixio-title',
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.HEADING,
                        text: 'Flixio',
                        level: 3,
                     },
                     {
                        id: 'flixio-description',
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.PARAGRAPH,
                        text: 'Flixio is a cross-platform streaming application designed for mobile, tablet, and desktop, allowing users to discover, search, and enjoy movies and series seamlessly across devices.',
                        classNames: ['text-neutral-400'],
                     },
                     {
                        id: 'flixio-cta-button',
                        elementType: ELEMENT_TYPES.BLOCK,
                        type: BLOCK_TYPES.BUTTON,
                        variant: BUTTON_VARIANTS.SECONDARY,
                        href: {
                           id: 'flixio-website-link',
                           url: '/projects/flixio',
                           label: 'View Project',
                        },
                        classNames: ['rounded-full', 'w-fit'],
                     },
                  ],
               },
            ],
         },
      ],
   },
} as const;
