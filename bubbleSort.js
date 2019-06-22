function BubbleSort(arr) {
    if (!arr || !arr.length) return arr;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

let result = BubbleSort([5, 3, 8, 6, 6, 2, 1]);
console.log(result);
