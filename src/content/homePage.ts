import { BLOCK_TYPES, LINK_TARGETS, SUB_CONTAINER_TYPES } from '../components/blocks';
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
      classNames: ['home-featured-section'],
      containers: [
         {
            id: 'home-featured-container',
            subContainers: [
               {
                  id: 'featured-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Featured Projects',
                  level: 2,
                  classNames: ['featured-heading', 'mb-4'],
               },
               {
                  id: 'sun-ray-media-card',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.MEDIA_CARD,
                  image: {
                     id: 'sun-ray-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/sunRayMediaCard.png',
                     alt: 'Sun Ray Media Card',
                     position: 'right',
                     classNames: ['rounded-lg'],
                     wrapperClassNames: [
                        'featured-media-card-image-wrapper',
                        'rounded-lg',
                        'overflow-hidden',
                        'shadow-lg',
                     ],
                  },
                  contentWrapperClassNames: ['featured-media-card-content-wrapper', 'p-6'],
                  containers: [
                     {
                        id: 'sun-ray-media-card-title',
                        classNames: ['featured-media-card-title', 'mb-2'],
                        subContainers: [
                           {
                              id: 'sun-ray-title',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.HEADING,
                              text: 'Sun Ray - Media Agency Website',
                              level: 3,
                              classNames: ['mb-2'],
                           },
                           {
                              id: 'sun-ray-description',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.PARAGRAPH,
                              text: 'A modern, responsive website for a media agency, showcasing services, portfolio, and client testimonials.',
                              classNames: ['mb-4'],
                           },
                           {
                              id: 'sun-ray-cta-button',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.BUTTON,
                              variant: 'primary',
                              href: {
                                 id: 'sun-ray-website-link',
                                 url: 'https://sunray-media-agency.com',
                                 label: 'View Project',
                                 target: LINK_TARGETS.BLANK,
                              },
                              classNames: ['rounded-lg'],
                           },
                        ],
                     },
                  ],
                  classNames: ['featured-media-card'],
               },
               {
                  id: 'beat-spot-media-card',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.MEDIA_CARD,
                  image: {
                     id: 'beat-spot-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/beatSpotMediaCard.png',
                     alt: 'Beat Spot Media Card',
                     position: 'left',
                     classNames: ['rounded-lg'],
                     wrapperClassNames: [
                        'featured-media-card-image-wrapper',
                        'rounded-lg',
                        'overflow-hidden',
                        'shadow-lg',
                     ],
                  },
                  contentWrapperClassNames: ['featured-media-card-content-wrapper', 'p-6'],
                  containers: [
                     {
                        id: 'beat-spot-media-card-title',
                        classNames: ['featured-media-card-title', 'mb-2'],
                        subContainers: [
                           {
                              id: 'beat-spot-title',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.HEADING,
                              text: 'Beat Spot - Music Streaming App',
                              level: 3,
                              classNames: ['mb-2'],
                           },
                           {
                              id: 'beat-spot-description',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.PARAGRAPH,
                              text: 'A sleek, user-friendly music streaming app with personalized playlists, social sharing, and offline listening.',
                              classNames: ['mb-4'],
                           },
                           {
                              id: 'beat-spot-cta-button',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.BUTTON,
                              variant: 'primary',
                              href: {
                                 id: 'beat-spot-website-link',
                                 url: 'https://beatspot-music-app.com',
                                 label: 'View Project',
                                 target: LINK_TARGETS.BLANK,
                              },
                              classNames: ['rounded-lg'],
                           },
                        ],
                     },
                  ],
                  classNames: ['featured-media-card', 'mt-8'],
               },
               {
                  id: 'flixio-media-card',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.MEDIA_CARD,
                  image: {
                     id: 'flixio-media-card-image',
                     type: BLOCK_TYPES.IMAGE,
                     src: '/src/assets/images/flixioMediaCard.png',
                     alt: 'Flixio Media Card',
                     position: 'right',
                     classNames: ['rounded-lg'],
                     wrapperClassNames: [
                        'featured-media-card-image-wrapper',
                        'rounded-lg',
                        'overflow-hidden',
                        'shadow-lg',
                     ],
                  },
                  contentWrapperClassNames: ['featured-media-card-content-wrapper', 'p-6'],
                  containers: [
                     {
                        id: 'flixio-media-card-title',
                        classNames: ['featured-media-card-title', 'mb-2'],
                        subContainers: [
                           {
                              id: 'flixio-title',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.HEADING,
                              text: 'Flixio - Movie Review Platform',
                              level: 3,
                              classNames: ['mb-2'],
                           },
                           {
                              id: 'flixio-description',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.PARAGRAPH,
                              text: 'An engaging platform for movie enthusiasts to read and write reviews, rate films, and discover new releases.',
                              classNames: ['mb-4'],
                           },
                           {
                              id: 'flixio-cta-button',
                              subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                              type: BLOCK_TYPES.BUTTON,
                              variant: 'primary',
                              href: {
                                 id: 'flixio-website-link',
                                 url: 'https://flixio-movie-reviews.com',
                                 label: 'View Project',
                                 target: LINK_TARGETS.BLANK,
                              },
                              classNames: ['rounded-lg'],
                           },
                        ],
                     },
                  ],
                  classNames: ['featured-media-card', 'mt-8'],
               }
            ],
         },
      ],
   },
} as const;
