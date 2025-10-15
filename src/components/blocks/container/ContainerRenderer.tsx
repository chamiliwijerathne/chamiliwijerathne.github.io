import type { BaseBlock, Block } from '../block.types';
import { BlockRenderer } from './BlockRenderer';
import { SUB_CONTAINER_TYPES } from './container.constants';
import type { BaseContainer } from './container.types';

export const ContainerRenderer = (props: BaseContainer) => {
   const { id, align, classNames, subContainers, gap, layout, style } = props;

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
         {(subContainers || []).map(({ subContainerType, ...rest }) => {
            if (subContainerType === SUB_CONTAINER_TYPES.BLOCK) {
               return <BlockRenderer key={rest.id} block={rest as Block} />;
            }

            if (subContainerType === SUB_CONTAINER_TYPES.CONTAINER) {
               return <ContainerRenderer key={rest.id} {...(rest as BaseContainer)} />;
            }

            return null;
         })}
      </div>
   );
};
