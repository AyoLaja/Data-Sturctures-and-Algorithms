//Function that takes in an int (n) and returns the sum of 1 to n
function addUpTo(n) {
    let total = 0;

    for (let i = 0; i <= n; i++) {
        total += i
    }

    return total
}

let t1 = performance.now()
console.log(addUpTo(100000000))
let t2 = performance.now()
console.log(`Time elapsed in ${(t2 - t1)} milliseconds`)