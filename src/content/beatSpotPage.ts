import { BLOCK_TYPES, LIST_MARKERS, LIST_TYPES, SUB_CONTAINER_TYPES } from '../components/blocks';
import { IMAGE_LOADING } from '../components/blocks/image';
import { SECTION_TYPES } from '../components/sections';
import type { BeatSpotPageType } from '../types';
import { IMAGES } from './constants/images';

export const beatSpotPage: BeatSpotPageType = {
   heroSection: {
      id: 'beatspot-hero',
      type: SECTION_TYPES.HERO,
      classNames: ['beatspot-hero-section'],
      img: {
         id: 'beatspot-hero-image',
         alt: 'BeatSpot Hero Image',
         src: IMAGES.HERO_BEAT_SPOT_PAGE as ImageMetadata,
         classNames: ['beatspot-hero-image', 'w-full', 'h-full', 'object-cover'],
         loading: IMAGE_LOADING.EAGER,
      },
   },
   overviewSection: {
      id: 'beatspot-overview',
      classNames: [],
      containers: [ // TODO: Refactor to add blocks directly to section
         {
            id: 'overview-container',
            classNames: ['flex', 'flex-col', 'pt-20', 'pb-20', 'w-[792px]', 'mx-auto'],
            subContainers: [
               {
                  id: 'overview-block-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Overview',
                  level: 4,
                  classNames: ['mb-6'],
               },
               {
                  id: 'overview-block-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  text: 'BeatSpot is a self-initiated mobile app designed for hip-hop fans to discover, explore, and book tickets for upcoming hip-hop events based on their location and interests. This project focuses on designing a smooth, user-centered experience that simplifies event discovery and booking.',
               },
            ],
         },
      ],
   },
   caseSection: {
      id: 'beatspot-case',
      classNames: ['w-[1200px]', 'mx-auto', 'flex', 'flex-row', 'gap-6'],
      containers: [
         {
            id: 'problem-container',
            classNames: ['p-6', 'bg-neutral-900'],
            subContainers: [
               {
                  id: 'problem-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Problem',
                  level: 4,
                  classNames: ['mb-4'],
               },
               {
                  id: 'problem-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  text: 'Hip-hop fans often struggle to discover relevant local events because event information is scattered across multiple platforms, and current apps mix different music genres, making search and discovery time-consuming and confusing.',
               },
            ]
         },
         {
            id: 'goal-container',
            classNames: ['p-6', 'bg-neutral-900'],
            subContainers: [
               {
                  id: 'goal-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Goal',
                  level: 4,
                  classNames: ['mb-4'],
               },
               {
                  id: 'goal-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  text: 'To create a seamless, user-friendly app that allows hip-hop fans to easily find, explore, and book tickets for events nearby, while providing a clear and engaging event discovery experience.',
               },
            ]
         },
         {
            id: 'role-container',
            classNames: ['p-6', 'bg-neutral-900'],
            subContainers: [
               {
                  id: 'role-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'My Role',
                  level: 4,
                  classNames: ['mb-4'],
               },
               {
                  id: 'role-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  text: 'This was an individual project where I planned and led each step of the design thinking process, applying my skills in mobile app UX/UI design.',
               },
            ]
         }
      ],
   },
   responsibilitiesSection: {
      id: 'beatspot-responsibilities',
      classNames: [],
      containers: [ // TODO: Refactor to add blocks directly to section
         {
            id: 'responsibilities-container',
            classNames: ['flex', 'flex-col', 'pt-20', 'pb-20', 'w-[792px]', 'mx-auto'],
            subContainers: [
               {
                  id: 'responsibilities-block-heading',
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Responsibilities',
                  level: 4,
                  classNames: ['mb-6'],
               },
               {
                  id: 'responsibilities-list',
                  type: BLOCK_TYPES.LIST,
                  subContainerType: SUB_CONTAINER_TYPES.BLOCK,
                  listType: LIST_TYPES.UNORDERED,
                  markerStyle: LIST_MARKERS.DISC,
                  items: [
                     'Conducted user research and competitor research on event discovery and music apps to identify gaps and opportunities.',
                     'Created user personas and journey maps to define user needs and guide design decisions.',
                     'Designed low-fidelity wireframes, interactive prototypes, and high-fidelity UIs using Figma.',
                     'Iteratively refined navigation and booking flows following usability best practices.',
                     'Documented the full process in a case study format for portfolio presentation.',
                  ],
               },
            ],
         },
      ],
   },
};

