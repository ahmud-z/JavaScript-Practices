function findMax(a, b) {
    return (a > b) ? a : b;
}

function main() {
    let a = prompt('Enter first input: ');
    let b = prompt('Enter second input: ');

    console.log('Max is ' + findMax(a, b));
}