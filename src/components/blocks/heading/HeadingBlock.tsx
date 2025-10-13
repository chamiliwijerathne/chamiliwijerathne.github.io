import type { HeadingBlock as Props } from './heading.types';

export const Heading = (props: Props) => {
   const { level = 1, text, align, classNames, style, id } = props;

   const baseClass = 'heading';
   const alignClass = align ? `heading-align-${align}` : '';
   const extraClasses = Array.isArray(classNames) ? classNames.join(' ') : classNames || '';
   const classes = [baseClass, alignClass, extraClasses].filter(Boolean).join(' ');

   const Tag = `h${level}` as React.ElementType;;

   return (
      <Tag id={id} className={classes} style={style}>
         {text}
      </Tag>
   );
};
