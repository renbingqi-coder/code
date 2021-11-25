function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function Tree() {
    this.root = null;

    Tree.prototype.create = function (Node) {

    }
}

//遍历方式  （先跟）先序遍历(当前节点 左子树 右子树)  （中跟）中序遍历(左子树 当前节点 右子树)  （后跟）后续遍历(左子树 右子树 当前节点)
var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
function fun(root,a,b){
    let Father = (root,father = null)=>{
        if(root===null){
            return 
        }
        root = {...root,father};
        root.left = Father(root.left,root);
        root.right = Father(root.right,root);
        if(root.value === a.value){
            a = root;
        }
        if(root.value === b.value){
            b = root;
        }
        return root;
    } 
    Father(root)

    const aarr = [];
    const barr = [];
    while(a!==null||b!==null){
        aarr.push(a);
        barr.push(b);
        a = a.father;
        b = b.father;
    }
    // console.log(aarr,barr);
    let result = {};
    aarr.length>=barr.length ? aarr.forEach(cur=>{
        console.log(cur.value);
        
        console.log(barr.find(el=>el.value===cur.value));
        result = result.value===barr.find(el=>el.value===cur.value)?.value?cur:result;
    }):barr.forEach(cur=>{
        result =  result.value===aarr.find(el=>el.value===cur.value)?.value?cur:result;
    });
    return result

}
console.log(fun(a,d,f))
