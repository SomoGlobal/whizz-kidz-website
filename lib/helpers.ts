// eslint-disable-next-line import/prefer-default-export
export const treeToArray = (obj) => {
  const paths = [];

  const generatePaths = (tree, parents = []) => {
    paths.push([...parents, tree.slug]);
    tree.children.forEach((i) => generatePaths(i, [...parents, tree.slug]));
  };

  if (obj) {
    generatePaths(obj);
  }

  return [...new Set(paths)];
};
