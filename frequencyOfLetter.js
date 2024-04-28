function findFrequency(word, letter) {

    let total = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            total++;
        }
    }
    return total;
}


function main() {
    let word = prompt('Enter a word: ');
    let letter = prompt('Enter a letter: ');

    console.log('Frequency of given letter is: '+ findFrequency(word, letter))
}


main();