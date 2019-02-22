function sieveOfEratosthenes(n) {
    // Buat array yang berisi elemen angka + 1 dengan nilai elemen true
    let isPrimeArr = new Array(n + 1).fill(true)

    // karena kita tahu 0 dan 1 bukan bilangan prima
    isPrimeArr[0] = false
    isPrimeArr[1] = false

    // Kita hanya perlu menilai √n
    for (var i = 2; i <= Math.sqrt(n); i++) {
        // Jika isPrimeArr [i] adalah bilangan prima, tandai semua kelipatan sebagai non-prima
        if (isPrimeArr[i] === true) {
            for (var j = 2; i * j <= n; j++) {
                console.log(`${i} Kelipatan: ${i * j}`)
                isPrimeArr[i * j] = false;
            }
        }
    }

    /**
     * Gantikan nilai true di isPrimeArr menjadi nilai indeks melalui arr.map
     * Saring false dalam array melalui arr.filter
    **/

    console.log()
    return isPrimeArr.map((item, index) => {
        return item ? index : false
    }).filter(item => item)
}


console.log(sieveOfEratosthenes(10))