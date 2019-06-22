/**
 * 插入排序
 * 预先假设第一项为最小
 * 从第二项开始遍历，与之前的项进行比较
 * 如果当前项比前面的小，则把前面的往前移，直到第一个
 * 当上面停止移动时，则代表当前位置已经是最新要被插入的最小值了，把当前值给它即可
 * @param {*} arr 
 */
function insetionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let temp = arr[i];

        while (j > 0 && temp < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = temp;
    }

    return arr;
}

let result = insetionSort([5, 3, 8, 6, 6, 2, 1]);

console.log(result);
