const recursion = tree => {
let arrRes = [[]];

function bfs(node, arrRes, i) {
    if (!arrRes[i]) arrRes[i] = [];
  arrRes[i].push(node.value);
       
if(node.left !== undefined)
    bfs(node.left, arrRes, i + 1);
if(node.right !== undefined)
    bfs(node.right, arrRes, i + 1);      
};
bfs(tree, arrRes, 0);
return arrRes;
};
module.exports = recursion;