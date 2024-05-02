function checkVowelConsonant(letter) {
    if (letter == 'a' || letter == 'e' || letter == 'i'
        || letter == 'o' || letter == 'u') {
        console.log('Given letter is a vowel');
    } else if (letter == 'A' || letter == 'E' || letter == 'I'
        || letter == 'O' || letter == 'U') {
        console.log('Given letter is a vowel');
    } else {
        console.log('Given letter is a consonant');
    }
}

function main() {
    let letter = prompt('Enter a letter: ');
    checkVowelConsonant(letter);
}

main();


