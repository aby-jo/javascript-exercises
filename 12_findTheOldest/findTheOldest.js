const findTheOldest = function(items) {
let arr=items.reduce((initial,obj)=>{
    if(obj.yearOfDeath==null){
        currentdate=new Date()
        currentyear=currentdate.getFullYear()
        obj.yearOfDeath=currentyear
    }
    dif=(obj.yearOfDeath-obj.yearOfBirth)
    return Math.max(dif,initial)
},0)
let ans=items.filter((obj)=>{
    dif=(obj.yearOfDeath-obj.yearOfBirth)
    if(dif==arr){
        return true
    }
})
return ans[0]
};

// Do not edit below this line
module.exports = findTheOldest;
