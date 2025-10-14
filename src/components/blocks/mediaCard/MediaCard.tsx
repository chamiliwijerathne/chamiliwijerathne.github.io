import { ContainerRenderer } from '../container';
import type { MediaCardBlockType as Props } from './mediaCard.types';

export const MediaCard = (props: Props) => {
   const { id, image, classNames, contentWrapperClassNames, containers, style } = props;

   const containerClass = ['media-card', ...(classNames || [])].join(' ');
   const imagePosition = image?.position || 'left';
   const imageWrapperClass = image?.wrapperClassNames?.join(' ') || `media-card-image-${imagePosition}`;
   const imageClass = image?.classNames?.join(' ') || 'w-full h-auto';

   const contentWrapperClass = ['media-card-content-wrapper', ...(contentWrapperClassNames || [])].join(' ');

   return (
      <div id={id} className={containerClass} style={style}>
         {image && image.position === 'left' && (
            <div className={imageWrapperClass}>
               <img src={image.src as string} alt={image.alt || 'Media Card'} className={imageClass} />
            </div>
         )}
         <div className={contentWrapperClass}>
            {containers?.map((container) => <ContainerRenderer key={container.id} {...container} />)}
         </div>
         {imagePosition === 'right' && (
            <div className={imageWrapperClass}>
               <img src={image.src as string} alt={image.alt || 'Media Card'} className={imageClass} />
            </div>
         )}
      </div>
   );
};
