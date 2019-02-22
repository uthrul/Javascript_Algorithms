function bubbleSort(arr) {
    let toIndex = arr.length

    while (toIndex > 1) {
        toIndex--
        for (let i = 0; i < toIndex; i++) {
            // Jika elemen sebelumnya lebih besar dari elemen berikut, tukar posisi elemen
            if (arr[i] > arr[i + 1]) {
                let tempValue = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tempValue
            }
        }
    }
    return arr
}

console.log(bubbleSort([5, 3, 8, 2, 1, 4]))
console.log(bubbleSort([20, 20, 31, 56, 1, 12, 12]))
console.log(bubbleSort([3, -9, -12, -1, 8]))