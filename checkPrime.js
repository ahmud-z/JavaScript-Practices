function checkPrime(number) {
    if (number <= 1) {
        return -1;
    }
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return -1;
        }
    }
    return 1;
}

function main() {
    let num = prompt('Enter a number: ');
    let flag = checkPrime(num);
    if (flag == 1) {
        console.log(num + ' is a prime number');
    } else {
        console.log(num + ' is not a prime number');
    }
}
main();