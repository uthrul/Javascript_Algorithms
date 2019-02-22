function caesarCipher(str, num) {
    let newString = []
    num = num % 26      // num: 0 ~ 25

    for (let i = 0; i < str.length; i++) {
        let currentCharCode = str.charCodeAt(i)
        let newCharCode

        /**
          * ASCII Kode 65 ~ 90 dalam huruf Inggris huruf besar
          * Huruf kecil Bahasa Inggris dari ASCII Code 97 ~ 122
        **/

        if (currentCharCode >= 65 && currentCharCode <= 90) {
            // konversi huruf besar Bahasa Inggris
            newCharCode = currentCharCode + num
            if (newCharCode < 65) {
                newCharCode = newCharCode + 26
            } else if (newCharCode > 90) {
                newCharCode = newCharCode - 26
            }
        } else if (currentCharCode >= 97 && currentCharCode <= 122) {
            // konversi huruf kecil Bahasa Inggris
            newCharCode = currentCharCode + num
            if (newCharCode < 97) {
                newCharCode = newCharCode + 26
            } else if (newCharCode > 122) {
                newCharCode = newCharCode - 26
            }
        } else {
            // sisanya tetap apa adanya
            newCharCode = currentCharCode
        }

        newString.push(String.fromCharCode(newCharCode))
    }
    return newString.join('')

}

console.log(caesarCipher('Zoo Keeper', 2))    //  Bqq Mggrgt
console.log(caesarCipher('Big Car', -16))    //  Lsq Mkb
console.log(caesarCipher('JavaScript', -900))    //  TkfkCmbszd