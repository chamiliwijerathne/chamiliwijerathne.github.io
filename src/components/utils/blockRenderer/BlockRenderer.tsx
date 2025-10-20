import { BLOCK_TYPES } from './block.constants';
import type { Block } from './block.types';
import { Button, Heading, List, MediaCard, Paragraph, Image } from '../../blocks';

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
