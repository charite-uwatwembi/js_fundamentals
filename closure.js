function createCounter() {
    let counter = 0;
    return function counterFn() {
        counter++;
        return counter;
    };
}
const myCounter = createCounter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3
