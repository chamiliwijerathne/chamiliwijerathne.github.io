import { BaseBlock, BLOCK_TYPES } from "../../utils";
import { TEXTAREA_RESIZE_OPTIONS, TEXTAREA_WRAP_OPTIONS } from "./textarea.constants";

export type TextAreaResizeOption = typeof TEXTAREA_RESIZE_OPTIONS[number];
export type TextAreaWrapOption = typeof TEXTAREA_WRAP_OPTIONS[number];

export interface TextAreaBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.TEXT_AREA;
   placeholder?: string;
   label?: string;
   labelClassNames?: string[];
   required?: boolean;
   rows?: number;
   cols?: number;
   maxLength?: number;
   minLength?: number;
   resize?: TextAreaResizeOption;
   wrap?: TextAreaWrapOption;
   autoComplete?: string;
   spellCheck?: boolean;
   readOnly?: boolean;
   disabled?: boolean;
   value?: string;
   defaultValue?: string;
}