import {
   BLOCK_TYPES,
   BUTTON_VARIANTS,
   LINK_TARGETS,
   SUB_CONTAINER_TYPES,
} from '../components/blocks';
import { SECTION_TYPES } from '../components/sections/section.constants';
import type { HomePageType } from '../types';
import { IMAGES } from './constants/images';

export const homePage: HomePageType = {
   heroSection: {
      id: 'home-hero-section',
      type: SECTION_TYPES.HERO,
      classNames: ['home-hero-section'],
      containers: [
         {
            id: 'home-hero-content-container',
            subContainers: [
               {
                  id: 'role-text',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.PARAGRAPH,
                  text: 'UI/UX DESIGNER',
                  classNames: ['home-hero-role'],
               },
               {
                  id: 'intro-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Hello, my name is',
                  level: 2,
                  classNames: ['leading-tight'],
               },
               {
                  id: 'full-name-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Chamili Wijerathne',
                  level: 1,
                  classNames: ['leading-tight', 'mb-8'],
               },
               {
                  id: 'role-description',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.PARAGRAPH,
                  text: 'A passionate UI/UX designer. I create clean, user-friendly digital experiences that bring ideas to life through thoughtful design and usability.',
                  classNames: ['role-description'],
               },
               {
                  id: 'cta-buttons-container',
                  subContainerType: SUB_CONTAINER_TYPES.CONTAINER,
                  classNames: ['cta-container'],
                  subContainers: [
                     {
                        id: 'projects-button',
                        subContainerType: SUB_CONTAINER_TYPES.BLOCK,
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
                        subContainerType: SUB_CONTAINER_TYPES.BLOCK,
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
         },
      ],
      img: {
         src: IMAGES.HERO_HOME_PAGE,
         alt: 'Hero',
         classNames: ['hero-img'],
         loading: 'eager',
      },
   },
   featuredSection: {
      id: 'home-featured-section',
      containers: [
         {
            id: 'home-featured-container',
            classNames: ['home-featured-section'],
            subContainers: [
               {
                  id: 'featured-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Featured',
                  level: 2,
                  classNames: ['featured-heading', 'mb-4'],
               },
               {
                  id: 'sun-ray-media-card',
                  classNames: [
                     'flex',
                     'flex-col',
                     'md:flex-row',
                     'shadow-[0_6px_64px_0_rgba(112,144,176,0.1)]',
                     'rounded-3xl',
                     'overflow-hidden',
                     'md:h-[524px]',
                     'bg-neutral-900',
                  ],
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.MEDIA_CARD,
                  image: {
                     id: 'sun-ray-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/sunRayMediaCard.png',
                     alt: 'Sun Ray Media Card',
                     position: 'right',
                     classNames: ['w-full', 'h-full', 'object-cover'],
                     wrapperClassNames: ['flex-1'],
                  },
                  containers: [
                     {
                        id: 'sun-ray-media-card-content-wrapper',
                        classNames: ['flex-1', 'flex', 'items-center'],
                        subContainers: [
                           {
                              id: 'sun-ray-title',
                              subContainerType: SUB_CONTAINER_TYPES.CONTAINER,
                              classNames: ['m-12', 'space-y-6'],
                              subContainers: [
                                 {
                                    id: 'sun-ray-title',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.HEADING,
                                    text: 'SunRay',
                                    level: 3,
                                 },
                                 {
                                    id: 'sun-ray-description',
                                    classNames: ['text-neutral-400'],
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.PARAGRAPH,
                                    text: 'SunRay is a responsive e-commerce website for a sunglass store, designed with a clean UI and seamless shopping experience across desktop and mobile.',
                                 },
                                 {
                                    id: 'sun-ray-cta-button',
                                    classNames: ['rounded-full', 'w-fit'],
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
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
                  ],
               },
               {
                  id: 'beat-spot-media-card',
                  classNames: [
                     'flex',
                     'flex-col',
                     'md:flex-row-reverse',
                     'shadow-[0_6px_64px_0_rgba(112,144,176,0.1)]',
                     'rounded-3xl',
                     'overflow-hidden',
                     'md:h-[524px]',
                     'bg-neutral-900',
                  ],
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.MEDIA_CARD,
                  image: {
                     id: 'beat-spot-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/beatSpotMediaCard.png',
                     alt: 'Beat Spot Media Card',
                     position: 'left',
                     classNames: ['w-full', 'h-full', 'object-cover'],
                     wrapperClassNames: ['flex-1', 'order-2'],
                  },
                  containers: [
                     {
                        id: 'beat-spot-media-card-title',
                        classNames: ['flex-1', 'order-1', 'flex', 'items-center'],
                        subContainers: [
                           {
                              id: 'beat-spot-title-container',
                              classNames: ['m-12', 'space-y-6'],
                              subContainerType: SUB_CONTAINER_TYPES.CONTAINER,
                              subContainers: [
                                 {
                                    id: 'beat-spot-title',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.HEADING,
                                    text: 'BeatSpot',
                                    level: 3,
                                 },
                                 {
                                    id: 'beat-spot-description',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.PARAGRAPH,
                                    text: 'BeatSpot is a mobile app that makes it easy for users to discover, explore, and book nearby hip hop concerts, battles, and festivals.',
                                    classNames: ['text-neutral-400'],
                                 },
                                 {
                                    id: 'beat-spot-cta-button',
                                    classNames: ['rounded-full', 'w-fit'],
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
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
                  ],
               },
               {
                  id: 'flixio-media-card',
                  classNames: [
                     'flex',
                     'flex-col',
                     'md:flex-row',
                     'shadow-[0_6px_64px_0_rgba(112,144,176,0.1)]',
                     'rounded-3xl',
                     'overflow-hidden',
                     'md:h-[524px]',
                     'bg-neutral-900',
                  ],
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.MEDIA_CARD,
                  image: {
                     id: 'flixio-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/flixioMediaCard.png',
                     alt: 'Flixio Media Card',
                     position: 'right',
                     classNames: ['w-full', 'h-full', 'object-cover'],
                     wrapperClassNames: ['flex-1'],
                  },
                  containers: [
                     {
                        id: 'flixio-media-card-title',
                        classNames: [
                           'flex-1',
                           'flex',
                           'items-center',
                        ],
                        subContainers: [
                           {
                              id: 'flixio-title-container',
                              subContainerType: SUB_CONTAINER_TYPES.CONTAINER,
                              classNames: ['m-12', 'space-y-6'],
                              subContainers: [
                                 {
                                    id: 'flixio-title',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.HEADING,
                                    text: 'Flixio',
                                    level: 3,
                                 },
                                 {
                                    id: 'flixio-description',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.PARAGRAPH,
                                    text: 'Flixio is a cross-platform streaming application designed for mobile, tablet, and desktop, allowing users to discover, search, and enjoy movies and series seamlessly across devices.',
                                    classNames: ['text-neutral-400'],
                                 },
                                 {
                                    id: 'flixio-cta-button',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
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
            ],
         },
      ],
   },
} as const;
