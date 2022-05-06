class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

//refer videos 

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = new Node();
      return this;
    } else {
      let currentRoot = this.root;
      while (true) {
        if(val === currentRoot) return undefined
        if (val < currentRoot) {
          let leftNode = currentRoot.left;
          if (!leftNode) {
            leftNode = newNode;
            return this;
          } else {
            currentRoot = leftNode;
          }
        } else if (val > currentRoot) {
          let rightNode = currentRoot.right;
          if (!rightNode) {
            rightNode = newNode;
            return this;
          } else {
            currentRoot = rightNode;
          }
        }
      }
    }
  }

  find(val){
      if(!this.root) return false
      let current = this.root, found = false
      while(current && !found){
          if(val < current.val){
              current = current.left
          }
          else if(val > current.val){
              current= current.right
          }
          else{
              found = true
          }
      }
      if(!found) return 'Not there in tree'
      return current; //will return the current node(found node)
  }

  contains(val){
    if(!this.root) return false
    let current = this.root, found = false
    while(current && !found){
        if(val < current.val){
            current = current.left
        }
        else if(val > current.val){
            current= current.right
        }
        else{
            return true
        }
    }
    return false
}
breadthFirstSearch(){
  let queue = []
  let visited = []
  let node = this.root
  queue.push(this.root)
  while(queue.length){
    node = queue.shift()
    visited.push(node.val)
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }
}

depthFirstPreOrder(){
  let visited = []
  let traverse = (node) => {
    visited.push(node.val)
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
  }
  traverse(this.root)
}
depthFirstPostOrder(){
  let visited = []
  let traverse = (node) => {
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
    visited.push(node.val)
  }
  traverse(this.root)
}
depthFirstInOrder(){
  let visited = []
  let traverse = (node) => {
    if(node.left) traverse(node.left)
    visited.push(node.val)
    if(node.right) traverse(node.right)
  }
  traverse(this.root)
}
}

let tree = new BST();
tree.insert(1);
