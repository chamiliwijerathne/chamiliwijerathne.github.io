import {
   BLOCK_TYPES,
   BUTTON_VARIANTS,
   LINK_TARGETS,
   SUB_CONTAINER_TYPES,
} from '../components/blocks';
import { SECTION_TYPES } from '../components/sections/section.constants';
import type { ProjectsPageType } from '../types';
import { IMAGES } from './constants/images';

export const projectsPage: ProjectsPageType = {
   heroSection: {
      id: 'projects-hero-section',
      type: SECTION_TYPES.HERO,
      classNames: ['projects-hero-section'],
      img: {
         id: 'projects-hero-image',
         src: IMAGES.HERO_PROJECTS_PAGE as ImageMetadata,
         alt: 'Hero',
         classNames: ['projects-hero-img'],
         loading: 'eager',
      },
   },
   projectsSection: {
      id: 'projects-section',
      containers: [
         {
            id: 'projects-container',
            classNames: ['projects-section'],
            subContainers: [
               {
                  id: 'heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Projects',
                  level: 2,
                  classNames: ['projects-heading', 'mb-4'],
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
                        classNames: ['flex-1', 'flex', 'items-center'],
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
               {
                  id: 'login-flow-media-card',
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
                     id: 'login-flow-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/loginFlowMediaCard.png',
                     alt: 'Login Flow Media Card',
                     position: 'left',
                     classNames: ['w-full', 'h-full', 'object-cover'],
                     wrapperClassNames: ['flex-1', 'order-2'],
                  },
                  containers: [
                     {
                        id: 'login-flow-media-card-title',
                        classNames: ['flex-1', 'order-1', 'flex', 'items-center'],
                        subContainers: [
                           {
                              id: 'login-flow-title-container',
                              classNames: ['m-12', 'space-y-6'],
                              subContainerType: SUB_CONTAINER_TYPES.CONTAINER,
                              subContainers: [
                                 {
                                    id: 'login-flow-title',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.HEADING,
                                    text: 'Login Flow',
                                    level: 3,
                                 },
                                 {
                                    id: 'login-flow-description',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.PARAGRAPH,
                                    text: 'A complete mobile authentication flow for BeatSpot, featuring onboarding, sign in/up, password recovery, and error handling—designed for a seamless user experience.',
                                    classNames: ['text-neutral-400'],
                                 },
                                 {
                                    id: 'login-flow-cta-button',
                                    classNames: ['rounded-full', 'w-fit'],
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.BUTTON,
                                    variant: BUTTON_VARIANTS.SECONDARY,
                                    href: {
                                       id: 'login-flow-link',
                                       url: '/projects/login-flow',
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
                  id: 'portfolio-media-card',
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
                     id: 'portfolio-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/portfolioMediaCard.png',
                     alt: 'Portfolio Media Card',
                     position: 'right',
                     classNames: ['w-full', 'h-full', 'object-cover'],
                     wrapperClassNames: ['flex-1'],
                  },
                  containers: [
                     {
                        id: 'portfolio-media-card-title',
                        classNames: ['flex-1', 'flex', 'items-center'],
                        subContainers: [
                           {
                              id: 'portfolio-title-container',
                              subContainerType: SUB_CONTAINER_TYPES.CONTAINER,
                              classNames: ['m-12', 'space-y-6'],
                              subContainers: [
                                 {
                                    id: 'portfolio-title',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.HEADING,
                                    text: 'Portfolio Website',
                                    level: 3,
                                 },
                                 {
                                    id: 'portfolio-description',
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.PARAGRAPH,
                                    text: 'A personal portfolio website project for web, showcasing UI/UX design and frontend development skills, built for desktop and mobile experiences.',
                                    classNames: ['text-neutral-400'],
                                 },
                                 {
                                    id: 'portfolio-cta-button',
                                    classNames: ['rounded-full', 'w-fit'],
                                    subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                                    type: BLOCK_TYPES.BUTTON,
                                    variant: BUTTON_VARIANTS.SECONDARY,
                                    href: {
                                       id: 'portfolio-link',
                                       url: '/projects/portfolio',
                                       label: 'View Project',
                                    },
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
