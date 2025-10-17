export const LIST_TYPES = {
   ORDERED: 'ordered',
   UNORDERED: 'unordered',
} as const;

export const LIST_MARKERS = {
  DISC: 'disc',
  CIRCLE: 'circle',
  SQUARE: 'square',
  DECIMAL: 'decimal',
  DECIMAL_LEADING_ZERO: 'decimal-leading-zero',
  LOWER_ALPHA: 'lower-alpha',
  UPPER_ALPHA: 'upper-alpha',
  LOWER_ROMAN: 'lower-roman',
  UPPER_ROMAN: 'upper-roman',
} as const;

export const markerClassMap: Record<string, string> = {
  [LIST_MARKERS.DISC]: 'list-disc',
  [LIST_MARKERS.CIRCLE]: 'list-circle',
  [LIST_MARKERS.SQUARE]: 'list-square',
  [LIST_MARKERS.DECIMAL]: 'list-decimal',
  [LIST_MARKERS.DECIMAL_LEADING_ZERO]: 'list-decimal list-inside',
  [LIST_MARKERS.LOWER_ALPHA]: 'list-[lower-alpha]',
  [LIST_MARKERS.UPPER_ALPHA]: 'list-[upper-alpha]',
  [LIST_MARKERS.LOWER_ROMAN]: 'list-[lower-roman]',
  [LIST_MARKERS.UPPER_ROMAN]: 'list-[upper-roman]',
} as const;