var A1 = [20, 16, 12, 11, 9, 7, 6];
//         0   1   2   3  4  5  6

var A2 = [20, 1, 0, -1, -9, -17, -26];
//         0  1  2   3   4    5    6

function question1(A, left, right) {
    var mid = (left + right) / 2
    if (mid == A[mid]) {
        return mid;
    }
    if (mid < A[mid]) {
        return question1(A, mid + 1, right)
    } else {
        return question1(A, left, mid -1)
    }
}


var A3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var A4 = [1, 3, 5, 7, 9, 6, 4, 2, 0];

function question2(A, left, right) {
    var mid = (left + right) / 2
    if (mid == 0 && A[1] > A[mid] ||  A[mid] == A.length-1 && A[A.length-2] > A[mid] || A[mid] < A[mid-1] && A[mid] < A[mid+1]) {
        return mid;
    }
    if (A[mid] > A[mid + 1]) {
        return question2(A, mid + 1, right)
    } else {
        return question2(A, left, mid)
    }
}

// console.log(question1(A1, 0, A1.length - 1));
// console.log(question1(A2, 0, A2.length - 1));

console.log(question2(A3, 0, A3.length - 1));
console.log(A3.reverse());
// console.log(question2(A3.reverse(), 0, A3.length - 1));
// console.log(question2(A4, 0, A4.length - 1));