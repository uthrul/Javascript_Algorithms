function twoSum(numArray, targetSum) {
    let pairs = []
    let waitForPair = []
    for (let currNum of numArray) {
        let counterPart = targetSum - currNum
        let counterPartIndex = waitForPair.indexOf(counterPart)

        // Jika ada counterPart yang sesuai ditemukan
        if (waitForPair.indexOf(counterPart) !== -1) {

            // hapus counterPart ini dari array asli
            waitForPair.splice(counterPartIndex, 1)

            // Tambahkan counter ini ke pasangan
            pairs.push([currNum, counterPart])
        } else {
            // Jika tidak ditemukan counterPart, simpan dulu nomor ini untuk dipasangkan
            waitForPair.push(currNum)
        }
    }
    return pairs
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7))      // [ [ 6, 1 ], [ 3, 4 ] ]
console.log(twoSum([40, 11, 19, 17, -12], 28))  // [ [ 17, 11 ], [ -12, 40 ] ]