function bubble() {
    let range = [9, 8, 6, 0, 3, 9, 5, 7, 2];
    for (let index1 = 0; index1 < range.length - 1; index1++) {
        for (let index2 = 0; index2 < range.length - 1 - index1; index2++) {
            if (range[index2] > range[index2 + 1]) {
                [range[index2], range[index2 + 1]] = [range[index2 + 1], range[index2]];
            }
        }
    }
    console.log(range);
}
// bubble();

function select() {
    let range = [9, 8, 6, 0, 3, 9, 5, 7, 2];
    for (let index1 = 0; index1 < range.length - 1; index1++) {
        let minIndex = index1;
        for (let index2 = index1 + 1; index2 < range.length; index2++) {
            if (range[index2] > range[minIndex]) {
                [range[index2], range[minIndex]] = [range[minIndex], range[index2]];
            }
        }
    }
    console.log(range);
}
// select();

function insert() {
    let range = [9, 8, 6, 0, 3, 9, 5, 7, 2];
    let preIndex, current;
    for (var index = 1; index < range.length; index++) {
        preIndex = index - 1;
        current = range[index];
        while (preIndex >= 0 && range[preIndex] > current) {
            range[preIndex + 1] = range[preIndex];
            preIndex--;
        }
        range[preIndex + 1] = current;
    }
    console.log(range);
}
insert()
