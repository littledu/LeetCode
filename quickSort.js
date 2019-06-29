/**
 * 快速排序
 * 
 * @param {*} arr
 */
function quickSort(arr) {
    quick(arr, 0, arr.length - 1);
    return arr;
}

function quick(arr, left, right) {
    let index;

    if (arr.length > 1) {
        index = partition(arr, left, right);

        if (left < index - 1) {
            quick(arr, left, index - 1);
        }

        if (index < right) {
            quick(arr, index, right);
        }
    }
}

/**
 * 快速排序的划分函数
 * 先确定基准值，这里以数组中间的一项作为基准值
 * 创建两个指针，左指针指向数组第一项，右指针指向数组最后一项
 * 移动左指针直到遇到比基值大的元素，移动右指针直到遇到比基准值小的元素，进行交换
 * 不断重复以上过程
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}

let result = quickSort([3, 5, 1, 6, 4, 7, 2]);
console.log(result);