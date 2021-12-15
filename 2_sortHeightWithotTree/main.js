//filter -1
//sort array
//replace sorted array in main array
function sortHeightWithoutTree(quee){
    const tempArray=quee.filter(function(item){
        return item!==-1;
    });
    tempArray.sort(function(a, b){return a - b});
    let j=0
    for(let i=0;i<quee.length;i++){
       if (quee[i]!==-1){
            quee.splice(i,1,tempArray[j])
            j+=1    
       }
    }
    return quee
}

console.log(sortHeightWithoutTree([-1, 150, 190, 170, -1, -1, 160, 180]))
                                //[-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortHeightWithoutTree([-1, 150, 190, 170, -1, -1, 160, 180, -1, 100, -1]))
                                //[-1, 100, 150, 160, -1, -1, 170, 180, -1, 190, -1]