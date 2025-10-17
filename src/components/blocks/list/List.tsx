import { LIST_MARKERS, LIST_TYPES, markerClassMap } from './list.constants';
import type { ListBlock as Props } from './list.types';

export const List = (props: Props) => {
   const { listType, markerStyle, items, classNames, style, id } = props;

   // Default marker styles
   const defaultMarker = listType === LIST_TYPES.ORDERED ? LIST_MARKERS.DECIMAL : LIST_MARKERS.DISC;

   const markerClass = markerClassMap[markerStyle || defaultMarker] || '';
   const baseClass = 'list list-outside';
   const extraClasses = Array.isArray(classNames) ? classNames.join(' ') : classNames || '';
   const classes = [baseClass, markerClass, extraClasses].filter(Boolean).join(' ');

   // Use <ol> for ordered, <ul> for unordered
   const ListTag = listType === LIST_TYPES.ORDERED ? 'ol' : 'ul';

   return (
      <ListTag id={id} className={classes} style={style}>
         {items.map((item, index) => (
            <li key={index}>{item}</li>
         ))}
      </ListTag>
   );
};
