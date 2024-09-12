const Mission1 = (arr) => {
    const filteredArr = arr.filter((val) => val % 2 == 0);
    return filteredArr;
}
// let arr = [1,2,3,4,5,6];
// console.log(Mission1(arr));

const Mission2 = (str) => {
    let indexOfSpaceChar;
    let count = 0;
    let i = 0;
    while(i < str.length){
        indexOfSpaceChar = str.indexOf(" ");
        if(indexOfSpaceChar == -1){
            count = str.length == 4? count+1: count;
            return count;
        }
        if(indexOfSpaceChar - i == 4)
            count++;
        str = str.substring(indexOfSpaceChar+1);
    }
    return count;
    
}
// console.log(Mission2("kobi moshe yy jaki yy kkkkkk"));


const Mission3 = (mat) => {
    let arr = [];
    let resultArr;
    for(let i = 0;i < mat.length;i++){
        resultArr = arr.concat(mat[i]);
        arr = resultArr;
    }
    return resultArr;
}
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// let mat = [arr1,arr2];
// console.log(Mission3(mat));

const Mission4 = (arr) => {
    let res;
    for(let i = 0;i < arr.length - 1;i++){
        if(arr[i] <= arr[i+1] && res != 2){
            res = 1;
        }
        else if(arr[i] >= arr[i+1] && res != 1){
            res = 2;
        }
        else{
            res = 0;
            return res;
        }
    }
    return res;
}
// console.log(Mission4([4,3,2,1]));
