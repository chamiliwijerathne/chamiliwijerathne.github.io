import React from 'react';
import remarkParse from 'remark-parse';
import type { Root, RootContent } from 'mdast';
import { unified } from 'unified';
import type { ParagraphBlock as Props } from './paragraph.types';

export const Paragraph = (props: Props) => {
   const { text, align, classNames, style, id } = props;

   const baseClass = 'paragraph';
   const alignClass = align ? `paragraph-align-${align}` : '';
   const extraClasses = Array.isArray(classNames) ? classNames.join(' ') : classNames || '';
   const classes = [baseClass, alignClass, extraClasses].filter(Boolean).join(' ');

   const ast: Root = unified().use(remarkParse).parse(text);

   const renderNode = (node: RootContent, idx?: number): React.ReactNode => {
    switch (node.type) {
      case 'text':
        return node.value;
      case 'strong':
        return <strong key={idx}>{node.children.map((child, i) => renderNode(child, i))}</strong>;
      case 'emphasis':
        return <em key={idx}>{node.children.map((child, i) => renderNode(child, i))}</em>;
      case 'paragraph':
        return <React.Fragment key={idx}>{node.children.map((child, i) => renderNode(child, i))}</React.Fragment>;
      default:
        return null; // ignore unsupported nodes
    }
  };
   return (
      <p id={id} className={classes} style={style}>
         {ast.children.map((node, i) => renderNode(node, i))}
      </p>
   );
};
