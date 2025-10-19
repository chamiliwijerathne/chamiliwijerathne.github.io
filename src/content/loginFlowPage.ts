import { BLOCK_TYPES, LIST_MARKERS, LIST_TYPES, ELEMENT_TYPES } from '../components/blocks';
import { IMAGE_LOADING } from '../components/blocks/image';
import { SECTION_TYPES } from '../components/sections';
import type { LoginFlowPageType } from '../types';
import { IMAGES } from './constants/images';

export const loginFlowPage: LoginFlowPageType = {
   heroSection: {
      id: 'loginFlow-hero',
      type: SECTION_TYPES.HERO,
      classNames: ['loginFlow-hero-section'],
      img: {
         id: 'loginFlow-hero-image',
         alt: 'LoginFlow Hero Image',
         src: IMAGES.HERO_LOGIN_FLOW_PAGE as ImageMetadata,
         classNames: ['loginFlow-hero-image', 'w-full', 'h-full', 'object-cover'],
         loading: IMAGE_LOADING.EAGER,
      },
   },
   overviewSection: {
      id: 'loginFlow-overview',
      classNames: ['flex', 'flex-col', 'pt-20', 'pb-20', 'w-[792px]', 'mx-auto'],
      elements: [
         {
            id: 'overview-block-heading',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.HEADING,
            text: 'Overview',
            level: 4,
            classNames: ['mb-6'],
         },
         {
            id: 'overview-block-paragraph',
            type: BLOCK_TYPES.PARAGRAPH,
            elementType: ELEMENT_TYPES.BLOCK,
            text: 'This project is an extension of BeatSpot – Hip Hop Event Finder App, created to showcase the complete login flow. It focuses on designing a cohesive entry experience for users, covering onboarding, sign-in, sign-up, and password recovery.',
         },
      ],
   },
   caseSection: {
      id: 'loginFlow-case',
      classNames: ['w-[1200px]', 'mx-auto', 'flex', 'flex-row', 'gap-6'],
      elements: [
         {
            id: 'problem-container',
            classNames: ['p-6', 'bg-neutral-900'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'problem-heading',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Problem',
                  level: 4,
                  classNames: ['mb-4'],
               },
               {
                  id: 'problem-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'Insert one to two sentences about the problem(s) you were trying to solve.',
               },
            ],
         },
         {
            id: 'goal-container',
            classNames: ['p-6', 'bg-neutral-900'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'goal-heading',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Goal',
                  level: 4,
                  classNames: ['mb-4'],
               },
               {
                  id: 'goal-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'To design a simple, accessible, and efficient login flow that builds user trust and ensures a smooth first-time experience.',
               },
            ],
         },
         {
            id: 'role-container',
            classNames: ['p-6', 'bg-neutral-900'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'role-heading',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'My Role',
                  level: 4,
                  classNames: ['mb-4'],
               },
               {
                  id: 'role-paragraph',
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'As the sole designer, I planned and executed the entire process — from mapping user flow and wireframing to creating high-fidelity mockups.',
               },
            ],
         },
      ],
   },
   responsibilitiesSection: {
      id: 'loginFlow-responsibilities',
      classNames: ['flex', 'flex-col', 'pt-20', 'pb-20', 'w-[792px]', 'mx-auto'],
      elements: [
         {
            id: 'responsibilities-block-heading',
            elementType: ELEMENT_TYPES.BLOCK,
            type: BLOCK_TYPES.HEADING,
            text: 'Responsibilities',
            level: 4,
            classNames: ['mb-6'],
         },
         {
            id: 'responsibilities-list',
            type: BLOCK_TYPES.LIST,
            elementType: ELEMENT_TYPES.BLOCK,
            listType: LIST_TYPES.UNORDERED,
            markerStyle: LIST_MARKERS.DISC,
            items: [
               'Researched common login and authentication patterns across popular apps.',
               'Defined the complete user flow for onboarding, sign-in, sign-up, and password recovery.',
               'Designed low-fidelity wireframes and interactive high-fidelity prototypes in Figma.',
               'Ensured visual and functional consistency with the main BeatSpot app design system.',
            ],
         },
      ],
   },
};
