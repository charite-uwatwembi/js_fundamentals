function insertAfterThree(str, s){
    let newArr = str.split(" ")
    
    for(let i= 0; i < newArr.length; i++){
        if((i + 1)% 3 === 0){
             newArr[i] += s
        }
    }
    return newArr.join(" ")
}
console.log(insertAfterThree("hello this is a trial of something that doesn't concern you" , "/"))