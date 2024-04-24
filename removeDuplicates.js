//remove duplicates of an array without using set
const removeDups = (arr) =>{
    return arr.filter((value,index,self)=>self.indexOf(value)===index)
    
}

console.log(removeDups([1,0,2,4,2,5,7,4]))