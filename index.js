import { visit } from 'unist-util-visit';

export default function rehypeCodeTitle() {
  return (tree) => {
    visit(tree, 'element', (node, index, parentNode) => {
      if (!parentNode || node.tagName !== 'code') return;

      const pre = parentNode;
      const code = node;

      const indexOfClassNameWithSemi = code.properties.className.findIndex(
        (cls) => cls.includes(':')
      );

      if (indexOfClassNameWithSemi === -1) return;

      const classNameWithSemi =
        code.properties.className[indexOfClassNameWithSemi];
      const [langClassName, title] = classNameWithSemi.split(':');
      code.properties.className.splice(
        indexOfClassNameWithSemi,
        1,
        langClassName
      );

      pre.children.splice(index, 0, {
        children: [{ type: 'text', value: title }],
        properties: { className: ['code-title'] },
        tagName: 'div',
        type: 'element',
      });
    });
  };
}
