function findFactorial(num) {
    let fact = 1;
    for (var i = 1; i <= num; i++) {
        fact*= i;
    }
    return fact;
}

function main(){
    let num = prompt('Enter a number: ');
    console.log(num + ' factorial is: '+ findFactorial(num))
}

main();
