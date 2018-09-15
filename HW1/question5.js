var n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0 ,0 ,0, 0 ,0 ,0, 0 ,0 ,0, 0 ,0 ,0];

function findLength (n, left, right) {
    while (n[right] === 1) {
        left = right;
        right *= 2;
    }
    if (right >= left) {
        var mid = left + (right - left) / 2;
        if (n[mid] === 1 && n[mid + 1] === 0) {
            return mid;
        }
        if (n[mid] == 1) {
            return findLength(n, mid, right);
        } else {
            return findLength(n, left, mid)
        }
    }
}
console.log(n[9] + "  " + n[10]);
console.log(findLength(n, 1, 1));