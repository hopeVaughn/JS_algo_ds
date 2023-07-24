// The way buildTree works is by mapping the input array to an array of TreeNode instances (or null for null values), and then setting the left and right properties for each node by using their indices in the array.

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(vals) {
  if (!vals.length) return null;

  let nodes = vals.map(val => val !== null ? new TreeNode(val) : null);
  nodes.forEach((node, idx) => {
    if (node !== null) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      if (leftIdx < vals.length) node.left = nodes[leftIdx];
      if (rightIdx < vals.length) node.right = nodes[rightIdx];
    }
  });

  return nodes[0];
}

module.exports = { buildTree, TreeNode };