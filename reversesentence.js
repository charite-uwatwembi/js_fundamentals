const reverseSntence = (str) =>{
    const newOne =str.split(' ')
   const newTwo = newOne.map((word) => word.split('').reverse().join(''))
   return newTwo.join(' ')
}
console.log(reverseSntence('I am Angular Developer'))