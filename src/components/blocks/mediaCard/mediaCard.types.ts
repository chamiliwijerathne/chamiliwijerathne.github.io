import type { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
// import type { ButtonVariant } from '../button';
import type { BaseContainer } from '../container';
import type { ImageBlock } from '../image';

// interface Props {
//     title: string;
//     description: string;
//     titleClassName?: string;
//     descriptionClassName?: string;
//     className?: string;
//     contentClassName?: string;
//     contentWrapperClassName?: string;
//     image?: {
//         src: string;
//         position: string;
//         className?: string;
//         wrapperClassName?: string;
//     }
//     actionButton?: {
//         text: string;
//         href?: {
//             url: string;
//             label?: string;
//             targetBlank?: boolean;
//         };
//         type?: 'primary' | 'secondary' | 'tertiary';
//         style?: {
//             roundedFull?: boolean;
//         };
//         className?: string;
//     };
// }

export interface MediaCardBlockType extends BaseBlock {
   type: typeof BLOCK_TYPES.MEDIA_CARD;
   image: ImageBlock & { position: 'left' | 'right', wrapperClassNames?: string[]; src?: string; };
   contentWrapperClassNames?: string[];
   containers?: BaseContainer[];
}
