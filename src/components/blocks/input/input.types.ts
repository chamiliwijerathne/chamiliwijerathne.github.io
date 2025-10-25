import { BaseBlock, BLOCK_TYPES } from "../../utils";
import { INPUT_SIZES, INPUT_TYPES, INPUT_VARIANTS } from "./input.constants";

export type InputVariantType = (typeof INPUT_VARIANTS)[keyof typeof INPUT_VARIANTS];
export type InputSizeType = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];
export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export interface InputBlock extends BaseBlock {
   type: typeof BLOCK_TYPES.INPUT;
   variant: InputVariantType;
   size: InputSizeType;
   inputType: InputType;
   placeholder?: string;
   label?: string;
   labelClassNames?: string[];
   required?: boolean;
}
