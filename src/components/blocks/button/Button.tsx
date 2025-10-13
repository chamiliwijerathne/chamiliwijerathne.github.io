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
      <button className={classes} style={style} id={id}>
         {href ? (
            <a
               href={href.url}
               target={href.targetBlank ? '_blank' : '_self'}
               rel={href.targetBlank ? 'noopener noreferrer' : href.rel}
            >
               {href.label}
            </a>
         ) : (
            <span>{label}</span>
         )}
      </button>
   );
};
