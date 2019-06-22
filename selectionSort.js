function SelectionSort(arr) {
    if (!arr || !arr.length) return arr;

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

    return arr;
}

let result = SelectionSort([5, 3, 8, 6, 6, 2, 1]);

console.log(result);
