//Function that takes in an int (n) and returns the sum of 1 to n
function addUpTo(n) {
    return n * (n + 1) / 2
}

let t1 = performance.now()
console.log(addUpTo(10000000000))
let t2 = performance.now()
console.log(`Time elapsed in ${(t2 - t1)} milliseconds`)