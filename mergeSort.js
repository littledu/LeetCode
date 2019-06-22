/**
 * 归并排序
 * 归，可以理解为先归类，把数组拆分，并作好排序
 * 并，就是把归完类的元素再合并起来，成为新的数组
 * 想理解归并排序，必需理解递归
 * 递归：理解为有去有回，层层递进，又能层层归来
 * 这里把一个数组层层递进的拆成最小粒度，即只有一个元素
 * 最后再层层迂回的比较排序，排完序的结果又是上一层的要比较的值，直到结束
 * @param {*} arr 
 */
function mergeSort(arr) {
    if (arr.length === 1) return arr;

    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * 归并排序依赖的合并算法
 * 此算法的前提是：想进行合并的两个数组，必需是已经排好序的数组或最小粒度的数组，这样子就可以按顺序对比两个数组的值
 * 如A[0]跟B[0]比较，A[0]和B[0]分别是两个数组的最小值，此操作能找出最小值
 * 假设A[0]比B[0]小，则B[0]继续跟A[1]比较，依此类推直到有一个数组全部比较完，那么，剩下的数组直接合并过去即可，因为已经没有比他们更小的了
 *  
 * @param {*} left 
 * @param {*} right 
 */
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

let result = mergeSort([2, 5, 1, 3, 7, 8, 6]);
console.log(result);
