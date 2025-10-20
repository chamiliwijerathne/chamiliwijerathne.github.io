import { IMAGE_LOADING, LIST_MARKERS, LIST_TYPES } from '../components/blocks';
import { SECTION_TYPES } from '../components/sections';
import { BLOCK_TYPES, ELEMENT_TYPES } from '../components/utils';
import type { SunRayPageType } from '../types';
import { IMAGES } from './constants/images';

export const sunRayPage: SunRayPageType = {
   heroSection: {
      id: 'sunray-hero',
      type: SECTION_TYPES.HERO,
      classNames: ['sunray-hero-section'],
      img: {
         id: 'sunray-hero-image',
         alt: 'SunRay Hero Image',
         src: IMAGES.HERO_SUN_RAY_PAGE as ImageMetadata,
         classNames: ['sunray-hero-image', 'w-full', 'h-full', 'object-cover'],
         loading: IMAGE_LOADING.EAGER,
      },
   },
   overviewSection: {
      id: 'sunray-overview',
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
            text: 'SunRays is a self-initiated project focused on designing a modern, responsive e-commerce website for a sunglass store. The website is designed for both desktop and mobile, ensuring a seamless shopping experience across devices.',
         },
      ],
   },
      caseSection: {
      id: 'sunray-case',
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
                  text: 'Online sunglasses stores often overwhelm users with too many options, unclear navigation, and complicated checkout processes. SunRays aims to simplify browsing and purchasing, helping users find their ideal sunglasses effortlessly.',
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
                  text: 'The goal of SunRays was to design a modern, responsive e-commerce website that offers a seamless and enjoyable shopping experience, allowing users to easily browse, explore, and purchase sunglasses across desktop and mobile devices.',
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
                  text: 'This was an individual project where I planned and led each step of the design thinking process, applying my skills in responsive web design.',
               },
            ],
         },
      ],
   },
   responsibilitiesSection: {
      id: 'sunray-responsibilities',
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
               'Researched common e-commerce UX patterns to identify best practices',
               'Designed user flows for product discovery, detail views, cart, and checkout',
               'Built wireframes, interactive prototypes, and polished high-fidelity mockups in Figma',
               'Applied responsive design principles to ensure consistency across mobile and desktop',
               'Packaged project into a case study for portfolio presentation',
            ],
         },
      ],
   },
};
