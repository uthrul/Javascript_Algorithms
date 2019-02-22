function harmlessRansomNote(noteText, magazineText) {

    // Konversi data input menjadi sebuah array
    let noteArr = noteText.split(' ')
    let magazineArr = magazineText.split(' ')

    // Simpan jumlah kemunculan setiap kata sebagai objek
    let magazineObj = {}
    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0
        magazineObj[word]++
    })

    // Periksa apakah kata dan nomor di noteText sudah cukup di magazineText
    let noteIsPossible = true
    noteArr.forEach(word => {
        if (magazineObj[word] > 0) {
            magazineObj[word]--
        } else {
            noteIsPossible = false
        }
    })
    return noteIsPossible
}

let noteText1 = 'This magazine magazine '
let noteText2 = 'This magazine magazine magazine'
let magazineText = 'This is all the magazine text in the magazine'

console.log(harmlessRansomNote(noteText1, magazineText))  // true
console.log(harmlessRansomNote(noteText2, magazineText))  // false（"magazine" Kuantitas tidak cukup）