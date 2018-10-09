'use strict';
const BinarySearchTree = require('./bst-class');

function main() {
  let BST = new BinarySearchTree();
  //const InputList='EASYQUESTION';
  const InputList=[3, 1, 4, 6, 9, 2, 5, 7];
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
        console.log('left tree.value' , tree.value);
      }
      if (tree.right){
        rDepth = maxDepth(tree.right);
        console.log('right tree.value' , tree.value);
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


  //is it BST?
  //Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates
  // function isBST(tree) {
  //   let lDepth = 0;
  //   let rDepth = 0;
  //   let lMax = 0;
  //   let rMax = 0;

  //   if (tree.left === null && tree.right === null) {
  //     return 0;
  //   } else {
  //     if(tree.left) {
  //       console.log('tree.value: ', tree.value);
  //       lDepth = isBST(tree.left);
  //       if(tree.left.value > lMax) {
  //         lMax = tree.left.value;
  //       }
  //     }
  //     if(tree.right) {

  //       rDepth = isBST(tree.right);
  //       if(tree.right.value > rMax) {
  //         rMax = tree.right.value;
  //       }
  //     }
  //   }
  
  //   console.log('testing');
  //   console.log('tree.value' , tree.value);
  //   console.log('lMax: ', lMax);
  //   console.log('rMax: ', rMax);
  //   // console.log('is a BST');
  //   // // return true;
 
  //   // console.log('is not a BST');
  //   // // return false;
    
  // }
  // console.log(isBST(BST));
  
}
main();
