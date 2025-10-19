import type { Block } from '../block.types';
import { BlockRenderer } from './BlockRenderer';
import { ELEMENT_TYPES } from './container.constants';
import type { BaseElement, ElementItem } from './container.types';

export const ContainerRenderer = (props: ElementItem) => {
   const { elementType, ...rest } = props;

   if (elementType === ELEMENT_TYPES.BLOCK) {
      return <BlockRenderer key={rest.id} block={rest as Block} />;
   }

   if (elementType === ELEMENT_TYPES.CONTAINER) {
      const { id, elements, layout, align, gap, classNames, style } = rest as BaseElement;

      const containerClasses = [
         'container',
         layout ? `container-layout-${layout}` : '',
         align ? `container-align-${align}` : '',
         gap ? `container-gap-${gap}` : '',
         Array.isArray(classNames) ? classNames.join(' ') : classNames || '',
      ]
         .filter(Boolean)
         .join(' ');

      return (
         <div id={id} className={containerClasses} style={style}>
            {(elements || []).map((element) => (
               <ContainerRenderer key={element.id} {...element} />
            ))}
         </div>
      );
   }

   return null;
};
