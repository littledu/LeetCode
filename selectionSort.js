/**
 * 选择排序
 * 假设第一个位置为最小
 * 依次与后面的位置进行比较
 * 如果后面的位置的值更小，则更新最小位置的索引值
 * 遍历完一圈后，交换当前位置与找到的最小值位置
 * 依此类推
 * @param {*} arr 
 */
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
