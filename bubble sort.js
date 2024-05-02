function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function main() {
    let arr = [1, 54, 12, 3, 6, 5, 2, 0];
    bubbleSort(arr);

    console.log('Sorted Array elements: ');

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
main();

