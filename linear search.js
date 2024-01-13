const arr = [1, 5, 3, 4, 8];
var flag = 0;
var num = 10

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        flag = 1;
        break;
    }
}

if (flag == 1) {
    console.log("Value Found");
} else {
    console.log("Value not found");
}