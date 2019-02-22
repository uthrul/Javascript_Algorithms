function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reverseWordsArr = [];

    wordsArr.forEach(word => {
        var reverseWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }
        reverseWordsArr.push(reverseWord);
    });
    return reverseWordsArr.join(' ');
}

console.log(reverseWords("this is a string words"));