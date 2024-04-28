function findFibo(num) {
    let term1 = 0;
    let term2 = 1;
    let nextTerm = term1 + term2;

    if (num == 0) {
        return;
    }

    console.log(term1);
    console.log(term2);

    for (let x = 3; x <= num; x++) {
        console.log(nextTerm);

        term1 = term2;
        term2 = nextTerm;
        nextTerm = term1 + term2;
    }
}

function main() {
    let num = prompt('Enter amount of fibonacci you want to print: ')
    findFibo(num);
}

main();