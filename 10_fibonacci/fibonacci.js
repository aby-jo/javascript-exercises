const fibonacci = function(num) {
    let f=0
    let s=1
    if(num<0){
        return("OOPS")
    }
    if(num==0){
        return 0
    }
    if(num==1){
        return 1
    }
    for(let i=0;i<num-1;i++){
        fib=s+f
        f=s
        s=fib
        
    }
    return fib
};

// Do not edit below this line
module.exports = fibonacci;
