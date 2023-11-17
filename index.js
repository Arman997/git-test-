 
console.log("Hello imac from tumolabs");
console.log("All errors are fixed");
console.log("Hello its test from imac for tumolabs!!!!");

let arr = [200,15, 10, 25, 30, 52, 100];

function sort(arr) {
    let cop = arr.slice(); // Создаем копию массива, чтобы не изменять оригинальный
    let res = [];

    while (cop.length > 0) {
        let minIndex = 0;

        for (let i = 1; i < cop.length; i++) {
            if (cop[i] < cop[minIndex]) {
                minIndex = i;
            }
        }

        res.push(cop[minIndex]);
        cop.splice(minIndex, 1);
    }

    return res;
}

console.log(sort(arr));
console.log("Hello, this is a test push to a May git repository from my computer where new code has been added to the index.js file");
