const leapYears = function(year) {
    let output=false

    if(year%4===0 && year%100!==0){
        output=true
    }
    else if(year%400===0){
        output=true
    }

    return output
};

// Do not edit below this line
module.exports = leapYears;
