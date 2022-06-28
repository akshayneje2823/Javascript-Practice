// x = findMax();

function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max
}

console.log(findMax(1,123,150,115,144,22,))