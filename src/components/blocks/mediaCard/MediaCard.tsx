
import { ContainerRenderer } from '../../utils';
import type { MediaCardBlock as Props } from './mediaCard.types';

export const MediaCard = (props: Props) => {
   const { id, image, classNames, containers, style } = props;

   const containerClass = [...(classNames || [])].join(' ');
   const imagePosition = image?.position || 'left';
   const imageWrapperClass = image?.wrapperClassNames?.join(' ') || `media-card-image-${imagePosition}`;
   const imageClass = image?.classNames?.join(' ') || 'w-full h-auto';

   return (
      <div id={id} className={containerClass} style={style}>
         {image && image.position === 'left' && (
            <div className={imageWrapperClass}>
               <img src={image.src as string} alt={image.alt || 'Media Card'} className={imageClass} />
            </div>
         )}
         <>
            {containers?.map((container) => <ContainerRenderer key={container.id} {...container} />)}
         </>
         {imagePosition === 'right' && (
            <div className={imageWrapperClass}>
               <img src={image.src as string} alt={image.alt || 'Media Card'} className={imageClass} />
            </div>
         )}
      </div>
   );
};
