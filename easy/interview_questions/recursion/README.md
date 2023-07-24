## Recursion

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
