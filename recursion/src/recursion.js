module.exports= function recursion(tree) {

let arrRes = [[]];
function bfs(node,arrRes,i) {
if(node.left !== undefined)
    bfs(node.left, arrRes, i + 1);
if(node.right !== undefined)
    bfs(node.right, arrRes, i + 1);
    arrRes[i].push(node.value);      
};
bfs(tree, arrRes, 0);

return arrRes;
};
 