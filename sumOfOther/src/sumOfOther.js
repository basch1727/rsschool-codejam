
  const arraySum = function aS(array){
  let sum = 0;
  let result=[];
  for(let i = 0; i < array.length; i++){
  array.slice(0);
  let copy = array.slice(0);
  copy.splice(i, 1);
  sum = copy.reduce ((a,b)=>(a+b),0) 
    result.push(sum);  
      }
  return result;
  }

  module.exports = arraySum;
