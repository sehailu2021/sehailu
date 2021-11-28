
function sum(a){
    let sumOfAll=0.0
    for(let i=0;i<a.length;++i){
        sumOfAll = sumOfAll+a[i]
    }
    if(sumOfAll > 20){
    return sumOfAll;
    }else{
        return null;
    }
}
const array = [1,2,3,4,5,6]
 console.log(sum(array));

function sum2(ar){
    var a = ar.reduce((x,y)=> x+y)
    if(a > 20){
        return a
    }else{
        return null;
    }
}
const narray = [1,2,3,4,5,6]
 console.log(sum2(narray));


function getNewArray(arr){
    let ans = [];
    let j = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length >= 5  )
        ans[j++] = arr[i];
    }
    return ans;

}
const a = ["kalkidan", "serkalem","soli" ]
 console.log(getNewArray(a));
