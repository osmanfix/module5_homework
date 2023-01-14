let arr = [1,2, 'a'];
let even = 0;
let odd = 0;
let others = 0;
for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        others++;
     } else {
        if (arr[i] % 2 === 0){        
        even++;
        } else {
            odd++;
    }
}
}

console.log("Четных : " + even);
console.log("Не четных : " + odd);
console.log("Остальные : " + others);
