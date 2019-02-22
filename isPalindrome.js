//  Menentukan apakah suatu kata merupakan palindrom atau tidak

function isPalindrome(str) {
    // Konversi semua kata menjadi huruf kecil, pisahkan menjadi array, dan kecualikan kata-kata non-Inggris
    str = str.toLowerCase()
    charactersArr = str.split('').filter(character => {
        return /[a-z]/.test(character)
    })

    // Jika konten yang ditulis dan dibalik adalah sama, maka kembalikan benar, jika tidak salah
    return charactersArr.join('') === charactersArr.reverse().join('')
}

console.log(isPalindrome("Madam, I'm Adam"))                // true
console.log(isPalindrome("Hello, I'm Adam"))                // false
console.log(isPalindrome("Race Car"))                       // true
console.log(isPalindrome("Coding JavaScript"))              // false
console.log(isPalindrome("Was it a car or a cat I saw?"))   // true
