let inputValue = prompt("Введите число");
if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Не четное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
