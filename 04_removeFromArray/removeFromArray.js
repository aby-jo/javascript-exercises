const removeFromArray = function(array,...nums) {
    let index=[];

    
    for(let i=0;i<array.length;i++){
        for(let j=0;j<nums.length;j++){
            
            if (array[i]===nums[j]){
                index.push(i);
            }
        }
    }
    index.sort((a, b) => b - a);
    for(let i=0;i<index.length;i++){ 
        array.splice(index[i],1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
