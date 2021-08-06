function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
node1.left = node2;
node1.right = node3;
node3.right = node4;

function zuoshitu(root){
    if(root===null||root.value===undefined){
        return;
    }
    const arr = [];
    const arr1 = [];
    let curnode = root;
    while(curnode){
        arr.push(curnode);
    }
    let curnode1 = root;
    while(curnode1){
        arr1.push(curnode1);
    }
    
    return arr.concat(arr1.slice(arr.length));
}

console.log(zuoshitu(node1));