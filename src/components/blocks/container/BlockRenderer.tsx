import { BLOCK_TYPES } from '../block.constants';
import type { Block } from '../block.types';
import { Button, } from '../button';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { MediaCard } from '../mediaCard';
import { List } from '../list';
import { Image } from '../image';

type Props = {
   block: Block;
};

export const BlockRenderer = ({ block }: Props) => {
   switch ((block).type) {
      case BLOCK_TYPES.HEADING:
         return <Heading {...block} />;
      case BLOCK_TYPES.PARAGRAPH:
         return <Paragraph {...block} />;
      case BLOCK_TYPES.BUTTON:
         return <Button {...block} />;
      case BLOCK_TYPES.MEDIA_CARD:
         return <MediaCard {...block} />;
      case BLOCK_TYPES.LIST:
         return <List {...block} />;
      case BLOCK_TYPES.IMAGE:
         return <Image {...block} />;
      default:
         return null;
   }
};
