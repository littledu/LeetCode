/**
 * 冒泡排序
 * 从第1个位置开始，依次与后一个位置的进行比较
 * 如果比较大，则交换位置
 * 层层往上直到所有排完
 * @param {*} arr 
 */
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
