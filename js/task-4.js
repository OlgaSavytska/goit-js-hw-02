
function findLongestWord(strict) {
    let words = strict.split(' ');
    let longestWord = words[0];
    // let leigth = words.leinght;
    for (const element of words) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord;
    
}


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


