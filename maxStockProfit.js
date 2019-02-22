/**
 * 
 * Menyimpan sejumlah nilai dalam array yang merupakan harga saham pada titik waktu yang berbeda, misalnya, [32, 46, 26, 38, 40, 48, 42] , kami ingin meneruskan algoritme:
    Cari tahu pada titik waktu mana untuk membeli dan waktu untuk menjual untuk mendapatkan pengembalian tertinggi. Ambil array sebagai contoh, harus dibeli dengan harga 26 yuan dan dijual 48 yuan. Pada saat ini, Anda akan mendapatkan pengembalian tertinggi 22 yuan.
    Jika tidak ada kemungkinan untung pada hari itu, kembalikan -1 .
 */

function maxStockProfit(pricesArr) {
    // declaring variables
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let changeBuyPrice = true;

    /**
     * Temukan kombinasi yang paling banyak untung
    **/
    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) {
            buyPrice = pricesArr[i];
        }
        sellPrice = pricesArr[i + 1];

        // Jika harga jual> = harga beli, itu berarti setidaknya> = 0
        // dapat menjual dan menghitung laba
        let currentProfit
        if (sellPrice >= buyPrice) {
            changeBuyPrice = false;
            currentProfit = sellPrice - buyPrice;
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        } else {
            // Jika harga jual <harga beli, itu berarti Anda akan kehilangan uang jika Anda menjualnya.
            // Jadi tidak bisa membeli saat ini
            changeBuyPrice = true;
        }
    }

    return maxProfit;
}


console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]))     // 22
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]))     // 12
console.log(maxStockProfit([65, 54, 43, 32, 26, 15]))         // -1