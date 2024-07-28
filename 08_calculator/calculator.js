const add = function(num1,num2) {
return num1+num2    
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(arr) {
	let count =arr.reduce((sum,item)=>{
    return sum+item
  },0)
  return count
};

const multiply = function(arr) {
  let count=arr.reduce((mul,item)=>{
    return mul*item
  },1)
  return count
};

const power = function(num1,num2) {
	return num1**num2
};

const factorial = function(num1) {
  let count=1
  if(num1==0){
    return 1
  }
  while(num1>0){
    count*=num1
    num1--
  }
  return count
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
