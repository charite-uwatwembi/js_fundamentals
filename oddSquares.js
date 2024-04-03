// a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.
function oddSquares(arr) {
    return arr.filter(num => num % 2 !== 0).map(num => num * num);
}


console.log(oddSquares([1, 2, 3, 4, 5, 6])); 
console.log(oddSquares([10, 15, 20, 25, 30])); 