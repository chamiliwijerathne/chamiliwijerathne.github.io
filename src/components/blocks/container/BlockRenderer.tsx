import { BLOCK_TYPES } from '../block.constants';
import type { BaseBlock } from '../block.types';
import { Button, type ButtonBlock } from '../button';
import { Heading, type HeadingBlock } from '../heading';
import { Paragraph, type ParagraphBlock } from '../paragraph';

type Props = {
   block: BaseBlock;
};

export const BlockRenderer = ({ block }: Props) => {
   console.log('===== BlockRenderer =====', block);
   switch ((block as BaseBlock).type) {
      case BLOCK_TYPES.HEADING:
         return <Heading {...(block as HeadingBlock)} />;
      case BLOCK_TYPES.PARAGRAPH:
         return <Paragraph {...(block as ParagraphBlock)} />;
      case BLOCK_TYPES.BUTTON:
         return <Button {...(block as ButtonBlock)} />;
      default:
         return null;
   }
};
