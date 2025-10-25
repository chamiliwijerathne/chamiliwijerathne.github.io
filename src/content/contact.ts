import { IMAGE_LOADING, BUTTON_VARIANTS, INPUT_TYPES } from '../components/blocks';
import { SECTION_TYPES } from '../components/sections';
import { BLOCK_TYPES, ELEMENT_TYPES } from '../components/utils';
import type { ContactPageType } from '../types';
import { IMAGES } from './constants/images';

export const contactPage: ContactPageType = {
   heroSection: {
      id: 'contact-hero-section',
      type: SECTION_TYPES.HERO,
      classNames: ['py-12', 'z-[-1]'],
      img: {
         id: 'contact-hero-image',
         src: IMAGES.HERO_PROJECTS_PAGE as ImageMetadata,
         alt: 'Hero',
         classNames: ['absolute', 'top-0', 'right-0'],
         loading: IMAGE_LOADING.EAGER,
      },
   },
   contactMeSection: {
      id: 'contact-me-section',
      classNames: [
         'w-full',
         'max-w-screen-xl',
         'mx-auto',
         'mt-20',
         'px-4',
         'sm:px-8',
         'md:px-12',
         'gap-20',
         'lg:gap-8',
         'grid',
         'grid-cols-1',
         'lg:grid-cols-2',
      ],
      elements: [
         {
            id: 'get-in-touch-container',
            classNames: ['flex', 'flex-col', 'space-y-8'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'get-in-touch-title',
                  type: BLOCK_TYPES.HEADING,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'Get in Touch',
                  level: 2,
               },
               {
                  id: 'get-in-touch-paragraph',
                  classNames: ['text-neutral-400', 'md:text-2xl'],
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'I’d love to hear from you! Whether it’s about collaboration, opportunities, or just to say hello, feel free to reach out.',
               },
               {
                  id: 'resume-button',
                  classNames: ['rounded-lg'],
                  type: BLOCK_TYPES.BUTTON,
                  elementType: ELEMENT_TYPES.BLOCK,
                  variant: BUTTON_VARIANTS.PRIMARY,
                  href: {
                     id: 'resume-link',
                     url: '/documents/resume.pdf',
                     target: '_blank',
                     label: 'Resume',
                  },
               },
            ],
         },
         {
            id: 'contact-me-form-container',
            classNames: ['flex', 'flex-col', 'space-y-6'],
            elementType: ELEMENT_TYPES.CONTAINER,
            elements: [
               {
                  id: 'contact-me-form-description',
                  classNames: ['text-lg'],
                  type: BLOCK_TYPES.PARAGRAPH,
                  elementType: ELEMENT_TYPES.BLOCK,
                  text: 'Fill out the form below.',
               },
               {
                  id: 'contact-me-form-item-container',
                  classNames: ['flex', 'flex-col', 'space-y-4', 'md:pl-6'],
                  elementType: ELEMENT_TYPES.CONTAINER,
                  elements: [
                     {
                        id: 'contact-me-name-container',
                        classNames: ['flex', 'flex-col', 'md:flex-row', 'md:space-x-4'],
                        elementType: ELEMENT_TYPES.CONTAINER,
                        elements: [
                           {
                              id: 'contact-me-first-name-input',
                              type: BLOCK_TYPES.INPUT,
                              elementType: ELEMENT_TYPES.BLOCK,
                              inputType: INPUT_TYPES.TEXT,
                              label: 'First Name',
                              placeholder: 'Enter your first name',
                              required: true,
                           },
                           {
                              id: 'contact-me-last-name-input',
                              type: BLOCK_TYPES.INPUT,
                              elementType: ELEMENT_TYPES.BLOCK,
                              inputType: INPUT_TYPES.TEXT,
                              label: 'Last Name',
                              placeholder: 'Enter your last name',
                              required: true,
                           },
                        ],
                     },
                     {
                        id: 'contact-me-email-input',
                        type: BLOCK_TYPES.INPUT,
                        elementType: ELEMENT_TYPES.BLOCK,
                        inputType: INPUT_TYPES.EMAIL,
                        label: 'Email',
                        placeholder: 'Enter your email address',
                        required: true,
                     },
                     {
                        id: 'contact-me-email-subject-input',
                        type: BLOCK_TYPES.INPUT,
                        elementType: ELEMENT_TYPES.BLOCK,
                        inputType: INPUT_TYPES.TEXT,
                        label: 'Subject',
                        placeholder: 'Enter the subject of your email',
                        required: true,
                     },
                     {
                        id: 'contact-me-message-textarea',
                        type: BLOCK_TYPES.TEXT_AREA,
                        elementType: ELEMENT_TYPES.BLOCK,
                        label: 'Message',
                        placeholder: 'Enter your message',
                        required: true,
                        rows: 6,
                     },
                     {
                        id: 'contact-me-submit-button',
                        classNames: ['self-end', 'rounded-lg'],
                        type: BLOCK_TYPES.BUTTON,
                        elementType: ELEMENT_TYPES.BLOCK,
                        variant: BUTTON_VARIANTS.PRIMARY,
                        label: 'Send',
                     },
                  ],
               },
            ],
         },
      ],
   },
} as const;
