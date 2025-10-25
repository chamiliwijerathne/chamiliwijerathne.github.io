import { IMAGE_LOADING, BUTTON_VARIANTS } from '../components/blocks';
import { SECTION_TYPES } from '../components/sections';
import { BLOCK_TYPES, ELEMENT_TYPES } from '../components/utils';
import type { AboutPageType } from '../types';
import { IMAGES } from './constants/images';

export const aboutPage: AboutPageType = {
   heroSection: {
      id: 'about-hero-section',
      type: SECTION_TYPES.HERO,
      classNames: ['py-12', 'z-[-1]'],
      img: {
         id: 'about-hero-image',
         src: IMAGES.HERO_PROJECTS_PAGE as ImageMetadata,
         alt: 'Hero',
         classNames: ['absolute', 'top-0', 'right-0'],
         loading: IMAGE_LOADING.EAGER,
      },
   },
   aboutMeSection: {
      id: 'about-me-section',
      classNames: [
         'flex',
         'flex-col',
         'lg:flex-row-reverse',
         'gap-10',
         'items-center',
         'w-full',
         'max-w-screen-xl',
         'mx-auto',
         'z-10',
         'mt-10',
         'mb-20',
      ],
      elements: [
         {
            id: 'about-me-image',
            classNames: ['flex-1', 'max-w-md', 'w-full', 'h-auto'],
            type: BLOCK_TYPES.IMAGE,
            elementType: ELEMENT_TYPES.BLOCK,
            src: '/images/about/about-me.svg',
            alt: 'About Me Image',
         },
         {
            id: 'about-me-container',
            classNames: ['flex-1', 'space-y-8'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'about-me-title',
                  type: BLOCK_TYPES.HEADING,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'About Me',
                  level: 2,
               },
               {
                  id: 'about-me-paragraph',
                  classNames: ['text-neutral-400', 'md:text-2xl'],
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: `I’m Chamili Wijerathne, a UI/UX designer dedicated to transforming ideas into intuitive digital products. I believe great design goes beyond aesthetics, it solves real problems and creates joyful experiences. I focus on building clean, responsive interfaces while maintaining a human-centered approach to interaction and usability. My goal is to design products that not only look good but feel natural and effortless for users.`,
               },
            ],
         },
      ],
   },
   eduSkillsSection: {
      id: 'edu-skills-section',
      classNames: [
         'w-full',
         'max-w-screen-xl',
         'mx-auto',
         'gap-8',
         'grid',
         'grid-cols-1',
         'md:grid-cols-2',
         'pt-15',
         'border-t',
         'border-primary-500',
      ],
      elements: [
         {
            id: 'about-me-edu-container',
            classNames: ['p-10', 'bg-neutral-900'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'about-me-edu-title',
                  type: BLOCK_TYPES.HEADING,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'Education',
                  level: 4,
                  classNames: ['mb-8'],
               },
               {
                  id: 'about-me-edu-list',
                  classNames: ['pl-6', 'space-y-4'],
                  type: BLOCK_TYPES.LIST,
                  elementType: ELEMENT_TYPES.BLOCK,
                  items: [
                     'Bachelor of Science (B.Sc.) - University of Colombo',
                     'Google UX Design Specialization - Google',
                     'Figma UI UX Design Advanced - Udemy',
                     'Figma UI UX Design Essentials - Udemy',
                  ],
               },
            ],
         },
         {
            id: 'about-me-skills-container',
            classNames: ['p-10', 'bg-neutral-900'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'about-me-skills-title',
                  type: BLOCK_TYPES.HEADING,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'Skills',
                  level: 4,
                  classNames: ['mb-8'],
               },
               {
                  id: 'about-me-skills-list',
                  classNames: ['pl-6', 'space-y-4'],
                  type: BLOCK_TYPES.LIST,
                  elementType: ELEMENT_TYPES.BLOCK,
                  items: [
                     'UI Design & Visual Communication',
                     'UX Research & Strategy',
                     'Wireframing & Prototyping',
                     'Design Systems & Consistency',
                     'Interaction Design',
                  ],
               },
            ],
         },
      ],
   },
} as const;
