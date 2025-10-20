import React, { type JSX } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'

export const markdownParser = unified().use(remarkParse)

export const MINI_MARKDOWN_ELEMENTS = {
   PARAGRAPH: 'paragraph',
   HEADING: 'heading',
   LIST: 'list',
   LIST_ITEM: 'listItem',
   STRONG: 'strong',
   EMPHASIS: 'emphasis',
   STRIKE_THROUGH: 'delete',
   LINK: 'link',
   CODE: 'code',
   INLINE_CODE: 'inlineCode',
} as const

export type MiniMarkdownElementType =
   (typeof MINI_MARKDOWN_ELEMENTS)[keyof typeof MINI_MARKDOWN_ELEMENTS]

export const DEFAULT_CODE_LANGUAGE = 'plaintext';

// Parse markdown into AST
export const parseMarkdown = (markdownText: string) => {
   const tree = markdownParser.parse(markdownText);
   return tree;
}

// Convert Markdown AST (MDAST) → React elements
export const renderNodes = (nodes: any[]): React.ReactNode => {
   return nodes.map((node, index) => {
      switch (node.type) {
         case MINI_MARKDOWN_ELEMENTS.PARAGRAPH:
            return <p key={index}>{renderNodes(node.children || [])}</p>;

         case MINI_MARKDOWN_ELEMENTS.HEADING:
            const HeadingTag = `h${node.depth}` as keyof JSX.IntrinsicElements;
            return <HeadingTag key={index}>{renderNodes(node.children || [])}</HeadingTag>;

         case MINI_MARKDOWN_ELEMENTS.LIST:
            const ListTag = node.ordered ? 'ol' : 'ul';
            return <ListTag key={index}>{renderNodes(node.children || [])}</ListTag>;

         case MINI_MARKDOWN_ELEMENTS.LIST_ITEM:
            return <li key={index}>{renderNodes(node.children || [])}</li>;

         case MINI_MARKDOWN_ELEMENTS.STRONG:
            return <strong key={index}>{renderNodes(node.children || [])}</strong>;

         case MINI_MARKDOWN_ELEMENTS.EMPHASIS:
            return <em key={index}>{renderNodes(node.children || [])}</em>;

         case MINI_MARKDOWN_ELEMENTS.LINK:
            return (
               <a key={index} href={node.url} target={node.target} rel={node.rel}>
                  {renderNodes(node.children || [])}
               </a>
            );

         case MINI_MARKDOWN_ELEMENTS.STRIKE_THROUGH:
            return <del key={index}>{renderNodes(node.children || [])}</del>;

         case MINI_MARKDOWN_ELEMENTS.CODE:
            return (
               <pre key={index}>
                  <code className={`language-${node.lang || DEFAULT_CODE_LANGUAGE}`}>
                     {node.value}
                  </code>
               </pre>
            );

         case MINI_MARKDOWN_ELEMENTS.INLINE_CODE:
            return <code key={index}>{node.value}</code>;

         default:
            return null;
      }
   });
}