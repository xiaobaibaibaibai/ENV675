var L = [1, 2, 3, 4];


function judgment(L) {
    
}

function findCombination(L, combination, start) {
    if (combination.length == 0) {
        return true;
    }
    if (sum(combination) >= length(combination)*length(combination)) {
        return true;
    } else {
        return false;
    }
    for (var i = start; i < L.length; i++) {
        combination.push(L[i]);
        findCombination(L, combination, i + 1);
        combination.pop();
    }
}

function sum(A) {
    var result = 0;
    for (var i of A) {
        result += i
    }
    return result;
}

console.log(sum(L));