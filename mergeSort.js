function mergeSort (arr) {
  
// Kondisi terminasi rekursif: Ketika array dibagi menjadi hanya satu elemen yang tersisa
  if (arr.length <= 1) {
    return arr
  }
  
// Terima serangkaian array yang tidak disortir sebagai argumen dan pisahkan menjadi setengah
  let middleIndex = Math.floor(arr.length / 2)
  let firstHalf = arr.slice(0, middleIndex)
  let secondHalf = arr.slice(middleIndex)
  
// kembalikan
  return sortBeforeMerge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function sortBeforeMerge (arr1, arr2) {
  /**
   * Mengganti dua array yang telah "diurutkan secara terpisah",
   * Urutkan kedua array menggunakan menggabungkan dan menggabungkan mereka kembali ke dalam array
**/
  let sortedArr = []
  
// Ketika arr1 atau arr2 bukan array kosong
  while (arr1.length && arr2.length) {
// Bandingkan elemen pertama dalam dua array, dan dorong yang lebih kecil ke SortArr
    let minElement = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift()
    sortedArr.push(minElement)
  }
  
  /**
   * akan melompat keluar dari loop sementara di atas, menunjukkan bahwa arr1 atau arr2 setidaknya salah satunya adalah array kosong
    * Oleh karena itu, jika arr1 bukan array kosong, gabungkan ke sortArr;
    * Jika bukan array kosong di arr2, gabungkan ke sortArr.
**/
  sortedArr = arr1.length ? sortedArr.concat(arr1) : sortedArr.concat(arr2)
  return sortedArr
}

console.log(mergeSort([3, 20, 8, 5, 1, 12, 17, 2]))