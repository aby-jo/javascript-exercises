const palindromes = function (word) {
    word=word.toLowerCase()
    let split=word.split("")
    let nospace=split.filter((item)=>{if(item==" "){
        return false
    }
    else if(item==","){
        return false
    }
    else if(item=="."){
        return false
    }
      else if(item=="!"){
        return false
    }
    else{
        return true
    }})
    let rev=nospace.join()
    nospace.reverse()
    nospace=nospace.join()
    for(let i=0;i<rev.length;i++){
        if(rev[i]!=nospace[i]){
            return false
        }
    }
    return true


};

// Do not edit below this line
module.exports = palindromes;
