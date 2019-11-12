const arr = [10, 2, 8, 1, 5, 3, 6, 4,7];
// 冒泡
function bubbleSort() {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            //相邻元素进行比较
            if(arr[j] > arr[j+1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        } 
    }

    return arr;
}
console.log(bubbleSort(arr));
bubbleSort(arr);
//选择排序
function selectSort(arr) {
    const length = arr.length;
    let minIndex,   
        temp;
    for(let i = 0; i < length -1; i++) {
        minIndex = i;
        for(let j = i + 1; j < length; j++) {
            //寻找最小数
            if(arr[j] < arr[minIndex]) {
                // 保留最小的索引
                minIndex = j;
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}
console.log(selectSort(arr));
selectSort(arr);

//插入排序
function insertSort(arr) {
    const lenght = arr.lenght;
    let preIndex,
        current;
    for(let i = 1; i < lenght; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--; 
        }
    }
    return arr;
}

console.log(insertSort(arr));
insertSort(arr);