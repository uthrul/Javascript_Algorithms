function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    };
}

function getMean(arr) {
    var sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum / arr.length;
}

function getMedian(arr) {
    arr = arr.sort();
    var length = arr.length;
    if (length % 2 !== 0) {
        length = length + 1;
    }
    return arr[length / 2];
}

function getMode(arr) {
    if (arr.length === 0) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    }
    arr = arr.sort();
    var mode = null;
    var counts = 1;
    var maxCounts = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] || arr.length - 1 == i) {
            counts++;
        } else {
            if (maxCounts < counts) {
                maxCounts = counts;
                mode = arr[i];
            }
            counts = 1;
        }
    }
    return mode;
}

var input = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

console.log(meanMedianMode(input));

