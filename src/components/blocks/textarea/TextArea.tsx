import { TextAreaBlock as Props } from './textarea.types';

export const TextArea = (props: Props) => {
   const {
      id,
      label,
      placeholder,
      required,
      classNames,
      labelClassNames,
      // Textarea-specific props
      rows = 4, // Number of visible rows
      cols, // Number of visible columns (optional)
      maxLength, // Maximum character limit
      minLength, // Minimum character limit
      resize = 'vertical', // Resize behavior: 'none', 'both', 'horizontal', 'vertical'
      wrap = 'soft', // Text wrapping: 'soft', 'hard', 'off'
      autoComplete, // Autocomplete attribute
      spellCheck = true, // Enable/disable spell check
      readOnly, // Make textarea read-only
      disabled, // Disable textarea
      value, // Controlled component value
      defaultValue, // Default value for uncontrolled
   } = props;

   const classes = [
      'bg-neutral-900',
      'border-[0.25px] border-neutral-700 rounded-md',
      'px-4 py-2',
      'text-neutral-500',
      'focus:outline-none focus:ring-[0.75px] focus:ring-primary-500',
      'textarea-base',
      resize === 'none' && 'resize-none',
      resize === 'vertical' && 'resize-y',
      resize === 'horizontal' && 'resize-x',
      resize === 'both' && 'resize',
      ...(classNames || []),
   ].join(' ');

   const labelClasses = ['textarea-label', ...(labelClassNames || [])].join(' ');

   return (
      <div className="textarea-container flex flex-col flex-1 space-y-1" id={id}>
         {label && (
            <label htmlFor={`${id}-textarea`} className={labelClasses}>
               {label} {required && <span className="textarea-required text-red-600">*</span>}
            </label>
         )}
         <textarea
            id={`${id}-textarea`}
            className={classes}
            placeholder={placeholder}
            required={required}
            rows={rows}
            cols={cols}
            maxLength={maxLength}
            minLength={minLength}
            wrap={wrap}
            autoComplete={autoComplete}
            spellCheck={spellCheck}
            readOnly={readOnly}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
         />
      </div>
   );
};
