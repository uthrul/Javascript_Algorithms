function binarySearch(array, val) {
    let first = 0,
        last = array.length - 1,
        middle = Math.floor((first + last) / 2);

    while (array[middle] != val && first < last) {
        if (val < array[middle]) {
            last = middle - 1;
        }
        else if (val > array[middle]) {
            first = middle + 1;
        }
        middle = Math.floor((first + last) / 2);
    }
    return (array[middle] === val) ? val : "not there"
}


console.log(binarySearch([4, 5, 6, 7, 8, 9, 10], 11));