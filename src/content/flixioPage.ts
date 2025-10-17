import { BLOCK_TYPES, LIST_MARKERS, LIST_TYPES, SUB_CONTAINER_TYPES } from '../components/blocks';
import { IMAGE_LOADING } from '../components/blocks/image';
import { SECTION_TYPES } from '../components/sections';
import type { FlixioPageType } from '../types';
import { IMAGES } from './constants/images';

export const flixioPage: FlixioPageType = {
   heroSection: {
      id: 'flixio-hero',
      type: SECTION_TYPES.HERO,
      classNames: ['flixio-hero-section'],
      img: {
         id: 'flixio-hero-image',
         alt: 'Flixio Hero Image',
         src: IMAGES.HERO_FLIXIO_PAGE as ImageMetadata,
         classNames: ['flixio-hero-image', 'w-full', 'h-full', 'object-cover'],
         loading: IMAGE_LOADING.EAGER,
      },
   },
   overviewSection: {
      id: 'flixio-overview',
      classNames: [],
      containers: [
         // TODO: Refactor to add blocks directly to section
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
                  text: 'Flixio is a self-initiated cross-platform streaming app designed for mobile, tablet, and desktop. It delivers a seamless and cinematic viewing experience through responsive layouts, intuitive navigation, and a visually engaging interface across all devices.',
               },
            ],
         },
      ],
   },
   caseSection: {
      id: 'flixio-case',
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
                  text: 'Users often experience cluttered layouts, inconsistent cross-device experiences, and complex navigation flows on streaming platforms, making content discovery and viewing less enjoyable.',
               },
            ],
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
                  text: 'To design a responsive streaming experience that allows users to effortlessly discover, search, and watch content across devices.',
               },
            ],
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
                  text: 'This was an individual project where I led every stage of the design thinking process — from research and wireframing to responsive design and interaction prototyping.',
               },
            ],
         },
      ],
   },
   responsibilitiesSection: {
      id: 'flixio-responsibilities',
      classNames: [],
      containers: [
         // TODO: Refactor to add blocks directly to section
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
                     'Conducted competitor research to identify common streaming app patterns',
                     'Created user personas and mapped user flows',
                     'Designed wireframes, interactive prototypes, and high-fidelity UIs using Figma.',
                     'Defined and refined navigation for a consistent cross-device experience',
                     'Documented the design process with clear visuals for portfolio presentation',
                  ],
               },
            ],
         },
      ],
   },
};
