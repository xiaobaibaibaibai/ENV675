var seq = "dadseesanna"
var i = 0, j = seq.length - 1
while (i !== j && i < j) {
    if (seq[i] !== seq[j]) {
        console.log('here');
        break;
    }
    i++;
    j--;
}
console.log("done");
