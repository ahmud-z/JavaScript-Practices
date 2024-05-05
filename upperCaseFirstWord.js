function makeUpper(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

function main() {
    let str = prompt('Enter a sentence: ');
    console.log(makeUpper(str));
}

main();