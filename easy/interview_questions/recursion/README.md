## Recursion

#### Special Note re: Binary Tree creation

The examples produced for the isSameTree function uses the following binary tree creation pattern:

```javascript
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

```

The way buildTree works is by mapping the input array to an array of TreeNode instances (or null for null values), and then setting the left and right properties for each node by using their indices in the array.

For a more visual and meaningful way to understand this is to look at the following example:

Let's imagine the `buildTree` function as an architect's blueprint that helps in constructing a city (the binary tree).

In this city, each building (node) has a unique identity (value), and two pathways (left and right) that can lead to other buildings. Some buildings may have both pathways (children), some might have just one, and some might not have any.

You're given a layout (the `vals` array), where each element represents a building and its position in the city. This layout uses a level order format, where the parent building is followed by its left and right child buildings. If there's an empty lot (represented as `null`), it means no building exists there.

Let's walk through the `buildTree` function with an example `vals` array: `[1,2,3]`. This represents a city layout with three buildings.

- First, the function ensures there are buildings to construct (i.e., `vals.length` isn't 0). If there's nothing to construct, it returns `null`.

- Then, it starts constructing the buildings (nodes). It goes through the layout and for each position, it either constructs a building (`new TreeNode(val)`) or leaves an empty lot (`null`).

```less
City (Nodes):[Building (Node) 1, Building (Node) 2, Building (Node) 3]
```

- Next, it's time to create the pathways (connections between nodes). The function starts from the first building and for each building, it sets the pathways. The left pathway goes to the building at position `2 * idx + 1` and the right pathway to the building at `position 2 * idx + 2`. If there's no building at a position (it's beyond the layout length), no pathway is set in that direction.

```less
City (Nodes):[Building 1 -> (left path to Building 2, right path to Building 3), Building 2, Building 3]
```

Once all pathways are set, the city (binary tree) is constructed. The function then returns the first building, which acts as the entry point (root) to the city (tree).

By using the `buildTree` function, we can convert a given level order layout into a binary tree. The time complexity is O(n), where n is the number of elements in vals, because we're going through all elements twice (once for creating nodes and once for creating connections). The space complexity is also O(n) for storing the nodes.

### Same Tree

Imagine you are an art critic, and your job is to determine whether two sculptures (in this case, binary trees p and q) are identical. You could look at both sculptures from a distance, but that might not be accurate. Instead, you decide to examine every part of each sculpture meticulously.

You start your examination with the very top piece (the root node) of both sculptures. If both pieces are identical, you decide to examine their sub-parts (children nodes).

```less
Sculpture p:    1        Sculpture q:    1
```

These two are identical.

- Now, you compare the next pieces. You first look to your left (left child).

```less
Sculpture p:    2        Sculpture q:    2
```

Great! These two are identical as well.

- Next, you look to your right (right child).

```less
Sculpture p:    3        Sculpture q:    3
```

These pieces are identical too. So, you can confidently say that both sculptures are identical in this case.

Let's consider another example where the sculptures (binary trees) are not identical:

```less
Sculpture p:    1        Sculpture q:    1
               /                       /   \
              2                       null  2
```

This time, while the top pieces are identical, the sub-parts differ. The left piece of p is 2, whereas the corresponding piece in q is missing (null). Hence, you'd declare these sculptures (binary trees) to be different.

This is essentially what the isSameTree function does. It starts with the root of the binary trees p and q. If both are null, it returns true (both trees are identical). If only one of them is null, it returns false (the trees are different). If both are not null, it checks whether the value of p and q are the same. If they are, it recursively does the same for the left and right child of both p and q.

This way, it compares every corresponding node in the binary trees until it finds a difference or verifies that they are identical. The time complexity is O(n), where n is the total number of nodes in the tree, because in the worst case scenario, we have to visit every node in both trees once. The space complexity is also O(n) in the worst case because the maximum amount of space is taken up by the recursive stack in the case of a skewed tree.