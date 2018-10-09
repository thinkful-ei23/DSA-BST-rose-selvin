'use strict';
const BinarySearchTree = require('./bst-class');

function main() {
  let BST = new BinarySearchTree();
  //const InputList='EASYQUESTION';
  const InputList=[3,1,4, 6, 9, 10, 2 ];
  for(let i=0; i < InputList.length; i++) {
    // console.log('InputList[i]: ', InputList[i]);
    BST.insert(InputList[i]);
  }
  // BST.insert('E', 'Hello');
  // BST.insert('A', 'Hello');
  console.log('BST: ', BST);
  //BST.maxDepth(InputList);
  //Max Depth = 4
  //runtime is O(n);
  function maxDepth(tree) {
    console.log('***tree: ', tree);
    let lDepth =0;
    let rDepth =0;
    if (tree.left === null && tree.right === null) {
      return 0;
    } else {
      // compute the depth of each subtree
      if (tree.left){
        lDepth = maxDepth(tree.left);
      }
      if (tree.right){
        rDepth = maxDepth(tree.right);
      }    

      if (lDepth > rDepth) {
        console.log('lDepth+1: ', lDepth+1);
        return(lDepth+1);
      } else {
        console.log('rDepth+1: ', rDepth+1);
        return (rDepth+1);
      } 
    }
  }
  console.log(maxDepth(BST));
}
main();
