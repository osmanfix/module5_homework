let arr = [1,2,3,4,5,6,7,8,9];
let comparison = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            comparison = false;
        }
    }
}
if (comparison) {
    console.log("Одинаковые элементы");
} else {
    console.log("Не одинаковые элементы");
}