function linearSearch(arr, num) {
    let flag = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            flag = 1;
            break;
        }
    }
    return flag;
}

function main() {
    let numbersArray = [1, 5, 3, 4, 8];
    let num = prompt('Enter a number: ');

    let flag = linearSearch(numbersArray, num);

    if (flag == 1) {
        console.log("Value Found");
    } else {
        console.log("Value not found");
    }
}
main();