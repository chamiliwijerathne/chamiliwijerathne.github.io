import { parseMarkdown, renderNodes } from './miniMarkdown.constants';

export const MiniMarkdown = ({ children }: { children: string }) => {
   const ast = parseMarkdown(children);
   console.log('AST:', ast);
   console.log('Rendered Nodes:', renderNodes(ast.children));
   return <>{renderNodes(ast.children)}</>;
};
