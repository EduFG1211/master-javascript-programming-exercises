// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    let count = 0;
    let sum = 0;
    if (obj[key] == null) {
        return 0;
    }
    else if (obj['key'].length == 0) {
        return 0;
    }
    else {
        for (let i in obj[key]) {
            sum = sum + obj[key][i];
            count = count + 1;
        }
        return sum/count;
    }
}
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2