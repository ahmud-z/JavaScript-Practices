function findEven(numbersArray) {
    console.log("Even array elements: ");
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 == 0) {
            console.log(numbersArray[i]);
        }
    }
}

function findOdd(numbersArray) {
    console.log("Odd array elements: ");
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 == 1) {
            console.log(numbersArray[i]);
        }
    }
}


function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    findEven(arr);
    findOdd(arr);
}


main();