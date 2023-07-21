/*
Approach:
A. Recursive approach:
1. Define the TreeNode Class. Each node has a val (the node's value), a left child (representing the left subtree), and a right child (representing the right subtree).
2. Check if root is null, thats mean the tree is empty. So we return null, cause there is nothing to invert 
3. If the root is not null, we swap the left and right subtrees of the current root. We achieve this by using array destructuring assignment in JavaScript.
4. After swapping left and right, call the function on the left and right. 

B. Iterative approach:
1. Check if root is null, thats mean the tree is empty. So we return null, cause there is nothing to invert 
2. Initialize a stack to perform a depth-first search (DFS) traversal of the binary tree.
3. Loop until the stack becomes empty.
4. Pop node from the stack end swap leftt and right.
5. push its children onto the stack (if they exist) to continue the traversal.
*/

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function invertTreeRecursive(root) {
  if (root == null) {
    return null;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTreeRecursive(root.left);
  invertTreeRecursive(root.right);

  return root;
}

function invertTreeIterative(root) {
  if (root == null) {
    return null;
  }

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();

    [node.left, node.right] = [node.right, node.left];

    //pushing child nodes into the queue for further processing
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return root;
}
