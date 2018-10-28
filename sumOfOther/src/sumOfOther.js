

module.exports = function arraySum(array){
  var sum = 0;
  var result=[];
  for(var i = 0; i < array.length; i++){
  array.slice(0);
  var copy = array.slice(0);
  copy.splice(i, 1);
  sum = copy.reduce ((a,b)=>(a+b),0) 
    result.push(sum);  
      }
  return result;
  }


/*var ele = [2,3,4,1]; 
function s (ele) {
    return 
    ele.map(function(currentValue, index, copy) {
    copy.splice(index,1)
    return copy.reduce((a,b)=>a+b,0);
    })
    };
    
    alert(s(ele));*/
    