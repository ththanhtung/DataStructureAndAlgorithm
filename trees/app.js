class Node {
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if (!this.root){
            this.root = newNode
        } else{
            let currentNode = this.root;
            while (true){
                if (currentNode.value < value){
                    if (!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
                if (currentNode.value > value){
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }
    // remove(value){
        // not finished yet
    //     if(!root){
    //         return false
    //     }else{
    //         let currentNode = this.root
    //         let parrentNode = null;
    //         while(currentNode){
    //             if(currentNode.value === value){
    //                 if (!currentNode.left && !currentNode.right){
    //                     parrentNode.
    //                 }
    //             }else if (currentNode.value < value){
    //                 parrentNode = currentNode
    //                 currentNode = currentNode.right
    //             }else if (currentNode.value > value){
    //                 parrentNode = currentNode
    //                 currentNode = currentNode.left
    //             }
    //         }
    //     }
    // }
    lookup(value){
        if (!this.root){
            return false
        }else{
            let currentNode = this.root;
            while(currentNode){
                if (currentNode.value === value){
                    return currentNode
                }
                else if (currentNode.value < value){
                    currentNode = currentNode.right
                }
                else if (currentNode.value > value){
                    currentNode = currentNode.left
                }     
            }
        }
        return false
    }
}

const tree = new BinarySearchTree()

tree.insert(5)
tree.insert(7)
tree.insert(3)
console.log(tree.insert(8));
console.log(tree.lookup(77));