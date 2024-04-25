// const reverseArray=(arr)=>{
//     let newArr = [];
//     return newArr=arr.slice().reverse()
// }
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
