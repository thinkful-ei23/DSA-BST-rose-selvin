'use strict';
const BinarySearchTree = require('./bst-class');

function main() {
  let BST = new BinarySearchTree();
  const InputList='EASYQUESTION';
  for(let i=0; i < InputList.length; i++) {
    console.log('InputList[i]: ', InputList[i]);
    BST.insert(InputList[i],InputList[i]);
  }
  
  console.log('BST: ', JSON.stringify(BST));

  
}
main();