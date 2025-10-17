import type { ButtonBlock as Props } from './button.types';
import { BUTTON_VARIANTS, buttonTypeClassMap } from './button.constants';

export const Button = (props: Props) => {
   const { label, href, variant = 'primary', classNames, style, align, id } = props;

   const baseClass = 'btn';
   const variantClass = buttonTypeClassMap[variant] || '';
   const alignClass = align ? `btn-align-${align}` : '';
   const extraClasses = Array.isArray(classNames) ? classNames.join(' ') : classNames || '';
   const classes = [baseClass, variantClass, alignClass, extraClasses].filter(Boolean).join(' ');

   return (
      <>
         {href ? (
            <a
               href={href.url}
               target={href.target ? '_blank' : '_self'}
               rel={href.rel ? 'noopener noreferrer' : href.rel}
            >
               <button className={classes} style={style} id={id}>{href.label}</button>
            </a>
         ) : (
            <button id={id} className={classes} style={style}>
               {label}
            </button>
         )}
      </>
   )
};
