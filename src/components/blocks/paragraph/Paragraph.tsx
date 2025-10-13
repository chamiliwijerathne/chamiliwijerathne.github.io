import type { ParagraphBlock as Props } from './paragraph.types';

export const Paragraph = (props: Props) => {
   const { text, align, classNames, style, id } = props;

   const baseClass = 'paragraph';
   const alignClass = align ? `paragraph-align-${align}` : '';
   const extraClasses = Array.isArray(classNames) ? classNames.join(' ') : classNames || '';
   const classes = [baseClass, alignClass, extraClasses].filter(Boolean).join(' ');

   return (
      <p id={id} className={classes} style={style}>
         {text}
      </p>
   );
};
