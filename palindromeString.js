function checkPalindrome(str) {
    let revStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    if (revStr == str) {
        return true;
    } else {
        return false;
    }
}

function main() {
    let str = prompt('Enter a string: ');

    if (checkPalindrome(str)) {
        console.log('Palindrome');
    } else {
        console.log('Not Palindrome');
    }
}

main();