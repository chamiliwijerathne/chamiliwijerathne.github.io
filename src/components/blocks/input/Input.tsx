import { InputBlock as Props } from "./input.types";

export const Input = (props: Props) => {
   const { id, label, placeholder, required, variant = 'default', size = 'medium', inputType = 'text', classNames, labelClassNames } = props;

   const classes = [
      'bg-neutral-900',
      'border-[0.25px] border-neutral-700 rounded-md',
      'px-4 py-2',
      'text-neutral-500',
      'focus:outline-none focus:ring-[0.75px] focus:ring-primary-500',
      'input-base',
      `input-variant-${variant}`,
      `input-size-${size}`,
      ...(classNames || []),
   ].join(' ');

   const labelClasses = [
      'input-label',
      ...(labelClassNames || []),
   ].join(' ');

   return (
      <div className="input-container flex flex-col flex-1 space-y-1" id={id}>
         {label && (
            <label htmlFor={`${id}-input`} className={labelClasses}>
               {label} {required && <span className="input-required text-red-600">*</span>}
            </label>
         )}
         <input
            id={`${id}-input`}
            type={inputType}
            className={classes}
            placeholder={placeholder}
            required={required}
         />
      </div>
   );
}