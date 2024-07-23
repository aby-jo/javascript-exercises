const sumAll = function(lowerbound,upperbound) {
    let sum=0
    let temp=0
    if((lowerbound<0||typeof(lowerbound)!="number"||!Number.isInteger(lowerbound))||(upperbound<0)||typeof(upperbound)!="number"||!Number.isInteger(upperbound)){
        sum="ERROR"}
    else{
    if(lowerbound>upperbound){
        temp=upperbound
        upperbound=lowerbound
        lowerbound=temp
    }
    for(let i=lowerbound;i<=upperbound;i++){
        sum+=i
    }
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
