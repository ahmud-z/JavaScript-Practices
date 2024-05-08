function makeCapital(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        let endIndex = words[i].length - 1;
        words[i] = words[i].slice(0, endIndex) + words[i][endIndex].toUpperCase();
    }

    return words.join(' ');
}

let str = prompt('Enter your sentence: ');

console.log(makeCapital(str));
