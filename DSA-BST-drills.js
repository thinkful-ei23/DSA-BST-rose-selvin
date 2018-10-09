'use strict';
const BinarySearchTree = require('./bst-class');

function main() {
  let BST = new BinarySearchTree();
  //const InputList='EASYQUESTION';
  const InputList='EASYQ';
  for(let i=0; i < InputList.length; i++) {
    console.log('InputList[i]: ', InputList[i]);
    BST.insert(InputList[i]);
  }
  // BST.insert('E', 'Hello');
  // BST.insert('A', 'Hello');
  console.log('BST: ', BST);

  
}
main();