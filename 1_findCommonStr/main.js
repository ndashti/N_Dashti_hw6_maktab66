// -------------------Start Function------------------------------
function uniqCharCount(mystr){
    let str=mystr.split("")
    const objCharCount={}
    for (var i = 0; i < str.length; i++) {
            if (objCharCount[str[i]] == undefined)
            {   
                objCharCount[str[i]] = 1;
            }else{
                objCharCount[str[i]]=objCharCount[str[i]]+1
            }
        }
    return(objCharCount)
}
// -------------------End Function--------------------------------
function findCommonStr(str1,str2){
    const CharCountObj1=uniqCharCount(str1)
    const CharCountObj2=uniqCharCount(str2)
    console.log(CharCountObj1)
    console.log(CharCountObj2)
    let sum = 0;
  Object.keys(CharCountObj1).forEach(key => {
        if(CharCountObj2.hasOwnProperty(key)){
        //    console.log(key, CharCountObj1[key] > CharCountObj2[key] ? CharCountObj2[key] : CharCountObj1[key]);
           sum += CharCountObj1[key] > CharCountObj2[key] ? CharCountObj2[key] : CharCountObj1[key];
        };
  });
    return sum
}
console.log(findCommonStr("aahhhbbcddddaaa","afbbb"))




