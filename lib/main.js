"use strict";
var arrayList =[
    {key:'0',value:'||:::'},
    {key:'1',value:':::||'},
    {key:'2',value:'::|:|'},
    {key:'3',value:'::||:'},
    {key:'4',value:':|::|'},
    {key:'5',value:':|:|:'},
    {key:'6',value:':||::'},
    {key:'7',value:'|:::|'},
    {key:'8',value:'|::|:'},
    {key:'9',value:'|:|::'}
    ];
/*数字字符串 转化成为 符号字符串*/
function format(str){
    return '|' + str + '|';
}
function checkNumArr(numArr){
    var sum = 0, count = 0;
    for(var i = 0; i<numArr.length; i++){
        sum += parseInt(numArr[i]);
    }
    for(;sum%10 !== 0;sum++){
        count++;
    }
    return count;
}
function numStrToNumArr(numStr){
    var result = [];
    for(var j= 0; j<numStr.length; j++){
        result.push(numStr[j]);
    }
    return result;
}
function numMatchCode(numStr){
    var numArr = numStrToNumArr(numStr), resNumStr = '';
    numArr.push(checkNumArr(numArr)+'');
    numArr.forEach(function (elem) {
        for(var i = 0; i<arrayList.length; i++){
            if(arrayList[i].key === elem){
                resNumStr += arrayList[i].value;
            }
        }
    })
    return resNumStr;
}

function numStrToCodeStr(Str){
    var numStr = Str + '';
    if(numStr.indexOf('-') >= 0){
        numStr = numStr.split('-').join('');
    }
    return format(numMatchCode(numStr));
}
function CodeStrDivideArray(codeStr){
    var len = codeStr.length, countIndex = 0, codeArr = [],tmp = '';
    for(var i= 1; i<len-1; i++){
        tmp += codeStr[i];
        countIndex ++;
        if(countIndex % 5 == 0){
            codeArr.push(tmp);
            tmp = '';
        }
    }
    return codeArr;
}
function codeStrMatchNumStr(array) {
    var numStr = '';
    for(var i = 0; i < array.length-1; i++){
        arrayList.forEach(function(elem){
            if(elem.value === array[i]){
                numStr += elem.key;
            }
        })
    }
    return numStr;
}
function CodeStrToNumStr(codeStr){
    var codeArray = CodeStrDivideArray(codeStr);
    var numStr = codeStrMatchNumStr(codeArray);
    return numStr;
}
function main(str){
    var resStr = '';
    var reg = /^[0-9]+\-?[0-9]+$/;
    if(reg.test(str)){
        return numStrToCodeStr(str);
    }else{
        return CodeStrToNumStr(str);
    }
}
module.exports = main;
