import { BLOCK_TYPES, LIST_MARKERS, LIST_TYPES, ELEMENT_TYPES } from '../components/blocks';
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
            text: 'BeatSpot is a self-initiated mobile app designed for hip-hop fans to discover, explore, and book tickets for upcoming hip-hop events based on their location and interests. This project focuses on designing a smooth, user-centered experience that simplifies event discovery and booking.',
         },
      ],
   },
   caseSection: {
      id: 'beatspot-case',
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
                  text: 'Hip-hop fans often struggle to discover relevant local events because event information is scattered across multiple platforms, and current apps mix different music genres, making search and discovery time-consuming and confusing.',
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
                  text: 'To create a seamless, user-friendly app that allows hip-hop fans to easily find, explore, and book tickets for events nearby, while providing a clear and engaging event discovery experience.',
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
                  text: 'This was an individual project where I planned and led each step of the design thinking process, applying my skills in mobile app UX/UI design.',
               },
            ],
         },
      ],
   },
   responsibilitiesSection: {
      id: 'beatspot-responsibilities',
      classNames: [],
      elements: [
         // TODO: Refactor to add blocks directly to section
         {
            id: 'responsibilities-container',
            classNames: ['flex', 'flex-col', 'pt-20', 'pb-20', 'w-[792px]', 'mx-auto'],
            elementType: ELEMENT_TYPES.CONTAINER,
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
                  classNames: ['pl-6'],
                  type: BLOCK_TYPES.LIST,
                  elementType: ELEMENT_TYPES.BLOCK,
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
   designThinkingSection: {
      id: 'beatspot-design-thinking',
      classNames: [],
      elements: [
         {
            id: 'design-thinking-container',
            classNames: ['flex', 'flex-col', 'items-center', 'pb-20', 'w-[1120px]', 'mx-auto'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'design-thinking-heading',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'Design Thinking Process',
                  level: 4,
                  classNames: ['mb-6'],
               },
               {
                  id: 'design-thinking-paragraph',
                  classNames: ['text-center', 'max-w-[895px]'],
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'Design Thinking is a human-centered, iterative problem-solving approach that helps designers deeply understand users, define the right problems, and create innovative, user-focused solutions.',
               },
               {
                  id: 'design-thinking-image',
                  type: BLOCK_TYPES.IMAGE,
                  elementType: ELEMENT_TYPES.BLOCK,
                  src: '/src/assets/images/beatSpotDesignThinking.svg',
                  alt: 'Design Thinking Process Image',
                  classNames: ['mt-8', 'w-full', 'h-auto', 'object-cover'],
               },
            ],
         },
      ],
   },
   userResearchSection: {
      id: 'beatspot-user-research',
      classNames: [],
      elements: [
         {
            id: 'user-research-container',
            classNames: ['flex', 'flex-col', 'pb-10', 'space-y-6', 'w-[792px]', 'mx-auto'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'user-research-heading',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'User Research',
                  level: 4,
                  classNames: ['mb-6'],
               },
               {
                  id: 'user-research-paragraph-1',
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'To understand the needs, frustrations, and preferences of hip-hop fans, I conducted foundational research for BeatSpot. The goal was to gain insights into how users currently discover, explore, and book hip-hop events, and to identify pain points in existing event discovery platforms.',
               },
               {
                  id: 'user-research-paragraph-2',
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'I focused on qualitative research methods, combining:',
               },
               {
                  id: 'user-research-methods-list',
                  classNames: ['pl-6'],
                  type: BLOCK_TYPES.LIST,
                  elementType: ELEMENT_TYPES.BLOCK,
                  listType: LIST_TYPES.UNORDERED,
                  markerStyle: LIST_MARKERS.DISC,
                  items: [
                     'Secondary research: analyzing competitor apps, websites, reviews, and reports to study existing solutions.',
                     'Informal interviews: speaking with potential users to better understand their behaviors and expectations.',
                  ],
               },
               {
                  id: 'user-research-paragraph-3',
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'These insights directly informed the design decisions and helped shape a user-centered experience.',
               },
            ],
         },
      ],
   },
   userResearchKeyInsightsSection: {
      id: 'beatspot-user-research-key-insights',
      classNames: [],
      elements: [
         {
            id: 'user-research-key-insights-container',
            classNames: ['flex', 'flex-col', 'space-y-6', 'w-[1120px]', 'mx-auto', 'pb-20'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'user-research-key-insights-heading',
                  elementType: ELEMENT_TYPES.BLOCK,
                  type: BLOCK_TYPES.HEADING,
                  text: 'User Research -  Key Insights',
                  level: 4,
                  classNames: ['mb-6'],
               },
               {
                  id: 'user-research-key-insights-cards',
                  classNames: [],
                  elementType: ELEMENT_TYPES.CONTAINER,
                  elements: [
                     {
                        id: 'user-research-key-insights-scattered-event-container',
                        classNames: ['p-6', 'bg-neutral-900'],
                        elementType: ELEMENT_TYPES.CONTAINER,
                        elements: [
                           {
                              id: 'user-research-key-insights-scattered-event-image',
                              elementType: ELEMENT_TYPES.BLOCK,
                              type: BLOCK_TYPES.IMAGE,
                              src: '/src/assets/images/beatSpotNumberOne.svg',
                              alt: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph-bold',
                              classNames: ['font-bold', 'text-xl'],
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph',
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Users struggle to find hip-hop events because listings are scattered across multiple platforms. (social media, ticketing websites, forums)',
                           },
                        ],
                     },
                     {
                        id: 'user-research-key-insights-scattered-event-container',
                        classNames: ['p-6', 'bg-neutral-900'],
                        elementType: ELEMENT_TYPES.CONTAINER,
                        elements: [
                           {
                              id: 'user-research-key-insights-scattered-event-image',
                              elementType: ELEMENT_TYPES.BLOCK,
                              type: BLOCK_TYPES.IMAGE,
                              src: '/src/assets/images/beatSpotNumberOne.svg',
                              alt: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph-bold',
                              classNames: ['font-bold', 'text-xl'],
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph',
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Users struggle to find hip-hop events because listings are scattered across multiple platforms. (social media, ticketing websites, forums)',
                           },
                        ],
                     },
                     {
                        id: 'user-research-key-insights-scattered-event-container',
                        classNames: ['p-6', 'bg-neutral-900'],
                        elementType: ELEMENT_TYPES.CONTAINER,
                        elements: [
                           {
                              id: 'user-research-key-insights-scattered-event-image',
                              elementType: ELEMENT_TYPES.BLOCK,
                              type: BLOCK_TYPES.IMAGE,
                              src: '/src/assets/images/beatSpotNumberOne.svg',
                              alt: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph-bold',
                              classNames: ['font-bold', 'text-xl'],
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph',
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Users struggle to find hip-hop events because listings are scattered across multiple platforms. (social media, ticketing websites, forums)',
                           },
                        ],
                     },
                     {
                        id: 'user-research-key-insights-scattered-event-container',
                        classNames: ['p-6', 'bg-neutral-900'],
                        elementType: ELEMENT_TYPES.CONTAINER,
                        elements: [
                           {
                              id: 'user-research-key-insights-scattered-event-image',
                              elementType: ELEMENT_TYPES.BLOCK,
                              type: BLOCK_TYPES.IMAGE,
                              src: '/src/assets/images/beatSpotNumberOne.svg',
                              alt: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph-bold',
                              classNames: ['font-bold', 'text-xl'],
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Scattered Event Information',
                           },
                           {
                              id: 'user-research-key-insights-scattered-event-paragraph',
                              type: BLOCK_TYPES.PARAGRAPH,
                              elementType: ELEMENT_TYPES.BLOCK,
                              text: 'Users struggle to find hip-hop events because listings are scattered across multiple platforms. (social media, ticketing websites, forums)',
                           },
                        ],
                     },
                  ],
               },
            ],
         },
      ],
   },
};
